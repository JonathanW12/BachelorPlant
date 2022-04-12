const returnFields = {
  _id: { active: true, field: "_id" },
  botanical_name: { active: true, field: "botanical_name" },
  danish_name: { active: true, field: "danish_name" },
  foliage: { active: false, field: "foliage" },
  fruit: { active: true, field: "fruit" },
  flowers: { active: false, field: "flowers" },
  poisonous: { active: true, field: "poisonous" },
  root_system: { active: true, field: "root_system" },
  salt_tolerance: { avtive: true, field: "salt_tolerance" },
  site: { active: true, field: "site" },
  soil_types: { active: false, field: "soil_types" },
  plant_type: { active: false, field: "soil" },
  wind_tolerance: { active: true, field: "wind_tolerance" },
  description: { active: false, field: "description" },
  water_prefferences: {
    active: true,
    field: "water_prefferences{water_min,water_max}",
  },
  size_height: { active: true, field: "size_height {size_min,size_max}" },
  size_spread: { active: false, field: "size_spread {size_min,size_max}" },
  ph_tolerance: { active: false, field: "ph_tolerance {ph_min,ph_max}" },
};
module.exports = {
  returnFields,
};
