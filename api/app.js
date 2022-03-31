const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");
const Plant = require("./models/plant");
const { events } = require("./models/plant");

const app = express();

app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: buildSchema(`
    type Plant{
      _id: ID!,
      botanical_name: String!,
      danish_name: String,
      fruit: Boolean
      foliage:String,
      flowers:Boolean,
      poisonous:Boolean,
      root_system: [String],
      salt_tolerance: Boolean,
      site: Int,
      soil_types: [String],
      plant_type: [String],
      wind_tolerance: Int,
      description: String,
    }

    type RootQuery{
        plants: [Plant!]
    }

    type RootMutation{
        createPlant(name: String): String
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
      createPlant: (args) => {
        const test = args.name;
        return test;
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
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
