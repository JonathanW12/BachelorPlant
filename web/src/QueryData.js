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
  site: { active: true, min: 1, max: 5, v0: 1, v1: 5 },
  soil_types: { active: false, field: "soil_types" },
  plant_type: { active: false, field: "plant_type" },
  wind_tolerance: { active: true, min: 1, max: 3, v0: 1, v1: 3 },
  description: { active: false, field: "description" },
  water_prefferences: {
    active: false,
    min: 1,
    max: 5,
    v0: 2,
    v1: 4,
  },
  size_height: { active: true, min: 0, max: 50, v0: 2, v1: 28 },
  size_spread: { active: false, min: 0, max: 30, v0: 0, v1: 30 },
  ph_tolerance: { active: false, min: 5, max: 9, v0: 5, v1: 9 },
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
        } else {
          break;
        }
      case "size_spread":
        if (
          returnFields.size_spread.min != returnFields.size_height.v0 ||
          returnFields.size_spread.max != returnFields.size_spread.v1
        ) {
          return `input_spread: {size_min:${returnFields.size_spread.v0},size_max:${returnFields.size_spread.v1}}`;
        } else {
          break;
        }
      case "ph_tolerance":
        if (
          returnFields.ph_tolerance.min != returnFields.ph_tolerance.v0 ||
          returnFields.ph_tolerance.max != returnFields.ph_tolerance.v1
        ) {
          return `input_ph: {ph_min:${returnFields.ph_tolerance.v0},ph_max:${returnFields.ph_tolerance.v1}}`;
        } else {
          break;
        }
      case "site":
        if (
          returnFields.site.min != returnFields.site.v0 ||
          returnFields.site.max != returnFields.site.v1
        ) {
          return `input_site: {site_min:${returnFields.site.v0},site_max:${returnFields.site.v1}}`;
        } else {
          break;
        }
      case "wind_tolerance":
        if (
          returnFields.wind_tolerance.min != returnFields.wind_tolerance.v0 ||
          returnFields.wind_tolerance.max != returnFields.wind_tolerance.v1
        ) {
          return `input_wind:{wind_min:${returnFields.wind_tolerance.v0},wind_max:${returnFields.wind_tolerance.v1}}`;
        } else {
          break;
        }
      case "water_prefferences":
        if (
          returnFields.water_prefferences.min !=
            returnFields.water_prefferences.v0 ||
          returnFields.water_prefferences.max !=
            returnFields.water_prefferences.v1
        ) {
          return `input_water:{water_min:${returnFields.water_prefferences.v0},water_max:${returnFields.water_prefferences.v1}}`;
        } else {
          break;
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
