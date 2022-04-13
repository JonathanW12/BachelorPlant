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
  plant_type: { active: false, field: "soil" },
  wind_tolerance: { active: false, field: "wind_tolerance" },
  description: { active: false, field: "description" },
  water_prefferences: {
    active: false,
    field: "water_prefferences{water_min,water_max}",
  },
  size_height: { active: true, field: "size_height {size_min,size_max}" },
  size_spread: { active: false, field: "size_spread {size_min,size_max}" },
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
const getActiveHeaderFields = () => {
  let result = "";
  Object.keys(returnFields).forEach((key) => {
    console.log(key);
    if (returnFields[key].active === true) {
      result += returnFields[key].field + ",";
    }
  });
  console.log(result);
  return result;
};
module.exports = {
  returnFields,
  getActiveHeaders,
  getActiveHeaderFields,
};
