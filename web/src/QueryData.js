const returnFields = {
  _id: { active: true, field: "_id" },
  botanical_name: { active: true, field: "botanical_name" },
  danish_name: { active: true, field: "danish_name" },
  foliage: { active: false, field: "foliage" },
  fruit: { active: false, field: "fruit" },
  flowers: { active: false, field: "flowers" },
  poisonous: { active: true, field: "poisonous" },
  root_system: { active: false, field: "root_system" },
  salt_tolerance: { avtive: true, field: "salt_tolerance" },
  site: { active: true, field: "site" },
  soil_types: { active: false, field: "soil_types" },
  plant_type: { active: false, field: "plant_type" },
  wind_tolerance: { active: true, field: "wind_tolerance" },
  description: { active: false, field: "description" },
  water_prefferences: {
    active: false,
    field: "water_prefferences{water_min,water_max}",
  },
  size_height: { active: true, min: 0, max: 50, v0: 0, v1: 49 },
  size_spread: { active: false, min: 0, max: 30, v0: 0, v1: 30 },
  ph_tolerance: { active: false, field: "ph_tolerance {ph_min,ph_max}" },
};
const getActiveHeaders = () => {
  let ids = Object.keys(returnFields).map((key, index) => {
    if (returnFields[key].active === false) {
      return key;
    }
    return;
  });
  return ids.filter(Boolean);
};
const getActiveSearchQuery = (returnFields) => {
  let ids = Object.keys(returnFields).map((key, index) => {
    switch (key) {
      case "size_height":
        if (
          returnFields.size_height.min != returnFields.size_height.v0 ||
          returnFields.size_height.max != returnFields.size_height.v1
        ) {
          return `input_height: {size_min: ${returnFields.size_height.v0}, size_max: ${returnFields.size_height.v1}}`;
        }
      case "size_spread":
        if (
          returnFields.size_spread.min != returnFields.size_height.v0 ||
          returnFields.size_spread.max != returnFields.size_spread.v1
        ) {
          return `input_spread: {size_min:${returnFields.size_spread.v0},size_max:${returnFields.size_spread.v1}}`;
        }
      default:
        return undefined;
    }
  });

  return ids.filter(Boolean).join();
};
module.exports = {
  returnFields,
  getActiveHeaders,
  getActiveSearchQuery,
};
