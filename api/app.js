const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");
const Plant = require("./models/plant");
const { events } = require("./models/plant");
const { restart } = require("nodemon");
const plant = require("./models/plant");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: buildSchema(`
    type Water_Prefferences{
      water_min: Int,
      water_max: Int,
    }
    type Size_Height{
      size_min: Int,
      size_max: Int,
    }
    type Size_Spread{
      size_min: Int,
      size_max: Int,
    }
    type Ph_Tolerance{
      ph_min: Int,
      ph_max: Int,
    }

    input WaterInput{
      water_min:Int,
      water_max:Int,
    }
    input HeightInput{
      size_min:Int,
      size_max:Int,
    }
    input SpreadInput{
      size_min:Int,
      size_max:Int,
    }
    input PhInput{
      ph_min:Int,
      ph_max:Int,
    }

    type Plant{
      _id: ID!,
      botanical_name: String!,
      danish_name: String,
      fruit: Boolean
      foliage:String,
      flowers:Boolean,
      poisonous:Boolean,
      root_system: String,
      salt_tolerance: Boolean,
      site: Int,
      soil_types: [String],
      plant_type: [String],
      wind_tolerance: Int,
      description: String,
      water_prefferences: Water_Prefferences,
      size_height: Size_Height,
      size_spread: Size_Spread,
      ph_tolerance: Ph_Tolerance
    }

    input PlantInput{
        botanical_name: String!,
        danish_name: String!,
        fruit: Boolean,
        foliage:String,
        flowers:Boolean,
        poisonous:Boolean,
        root_system: String,
        salt_tolerance: Boolean,
        site: Int!,
        soil_types: [String],
        plant_type: [String],
        wind_tolerance: Int,
        description: String!,
        water_prefferences: WaterInput,
        size_height: HeightInput,
        size_spread: SpreadInput,
        ph_tolerance: PhInput,
    }

    type RootQuery{
        plants: [Plant!]
        singlePlant(_id:ID!):Plant!
    }

    type RootMutation{
        createPlant(plantInput: PlantInput): Plant
    }

    schema{
        query: RootQuery,
        mutation: RootMutation
    }
    `),
    rootValue: {
      plants: () => {
        return Plant.find()
          .then((plants) => {
            return plants.map((plant) => {
              return { ...plant._doc, _id: plant._id.toString() };
            });
          })
          .catch((err) => {
            console.log(err);
          });
      },
      singlePlant: (args) => {
        return Plant.findOne({ _id: args._id });
      },
      createPlant: (args) => {
        const newPlant = new Plant({
          botanical_name: args.plantInput.botanical_name,
          danish_name: args.plantInput.danish_name,
          description: args.plantInput.description,
          site: args.plantInput.site,
          water_prefferences: args.plantInput.water_prefferences,
          fruit: args.plantInput.fruit,
          foliage: args.plantInput.foliage,
          flowers: args.plantInput.flowers,
          poisonous: args.plantInput.poisonous,
          root_system: args.plantInput.root_system,
          salt_tolerance: args.plantInput.salt_tolerance,
          soil_types: args.plantInput.soil_types,
          plant_type: args.plantInput.plant_type,
          wind_tolerance: args.plantInput.wind_tolerance,
          size_height: args.plantInput.size_height,
          size_spread: args.plantInput.size_spread,
          ph_tolerance: args.plantInput.ph_tolerance,
        });
        return newPlant
          .save()
          .then((result) => {
            console.log(result);
            return { ...result._doc, _id: result._id.toString() };
          })
          .catch((err) => {
            console.log(err);
            throw err;
          });
      },
    },
    graphiql: true,
  })
);
// [String!] means not nullable array of strings

mongoose
  .connect(
    `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.df1do.mongodb.net/${process.env.MONGO_PATH}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
