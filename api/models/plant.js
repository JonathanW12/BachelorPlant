const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  botanical_name: {
    type: String,
    rquired: true,
  },
  danish_name: {
    type: String,
  },
  flowers: Boolean,
  foliage: String,
  fruit: Boolean,
  ph_tolerance: {
    ph_min: Number,
    ph_max: Number,
  },
  poisonous: Boolean,
  root_system: [String],
  salt_tolerance: Boolean,
  site: Number,
  size_height: {
    size_min: Number,
    size_max: Number,
  },
  size_spread: {
    size_min: Number,
    size_max: Number,
  },
  soil_types: [String],
  plant_type: [String],
  water_prefferences: {
    water_min: Number,
    water_max: Number,
  },
  wind_tolerance: {
    type: Number,
    min: 1,
    max: 3,
  },
  description: String,
});

module.exports = mongoose.model("Plant", plantSchema);
