function keyToSearchString(args, key) {
  var searchString = {
    default: "",
  };

  setSizeHeight(searchString, args);
  setWindInterval(searchString, args);
  setPhInterval(searchString, args);
  setSizeSpread(searchString, args);
  setWaterInterval(searchString, args);
  setSiteInterval(searchString, args);
  setIsPoisonous(searchString, args);
  setHasFlowers(searchString, args);
  setHasFruit(searchString, args);
  setIsSaltTolerant(searchString, args);
  setPlantType(searchString, args);
  setRoot(searchString, args);
  setSoil(searchString, args);
  console.log(searchString[key] || searchString["default"]);
  return searchString[key] || searchString["default"];
}

const setSizeHeight = (searchString, args) => {
  try {
    if (
      (args.input_height.size_min == "0" || args.input_height.size_min) &&
      (args.input_height.size_max == "0" || args.input_height.size_max)
    ) {
      searchString.input_height = {
        $and: [
          {
            "size_height.size_min": {
              $lte: args.input_height.size_max,
            },
          },
          {
            "size_height.size_max": {
              $gte: args.input_height.size_min,
            },
          },
        ],
      };
    }
  } catch (error) {}
};
const setWindInterval = (searchString, args) => {
  try {
    if (
      (args.input_wind.wind_min == "0" || args.input_wind.wind_min) &&
      (args.input_wind.wind_max == "0" || args.input_wind.wind_max)
    ) {
      searchString.input_wind = {
        wind_tolerance: {
          $gte: args.input_wind.wind_min,
          $lte: args.input_wind.wind_max,
        },
      };
    }
  } catch (eror) {}
};
const setPhInterval = (searchString, args) => {
  try {
    if (
      (args.input_ph.ph_max == "0" || args.input_ph.ph_max) &&
      (args.input_ph.ph_min == "0" || args.input_ph.ph_min)
    ) {
      searchString.input_ph = {
        $and: [
          {
            "ph_prefference.ph_min": {
              $lte: args.input_ph.ph_max,
            },
          },
          {
            "ph_prefferences.ph_max": {
              $gte: args.input_ph.ph_min,
            },
          },
        ],
      };
    }
  } catch (error) {}
};
const setSizeSpread = (searchString, args) => {
  try {
    if (
      (args.input_spread.size_max == "0" || args.input_spread.size_max) &&
      (args.input_spread.size_min == "0" || args.input_spread.size_min)
    ) {
      searchString.input_spread = {
        $and: [
          {
            "size_spread.size_min": {
              $lte: args.input_spread.size_max,
            },
          },
          {
            "size_spread.size_max": {
              $gte: args.input_spread.size_min,
            },
          },
        ],
      };
    }
  } catch (error) {}
};
const setWaterInterval = (searchString, args) => {
  try {
    if (
      (args.input_water.water_min == "0" || args.input_water.water_min) &&
      (args.input_water.water_max == "0" || args.input_water.water_max)
    ) {
      searchString.input_water = {
        $and: [
          {
            "water_prefferences.water_min": {
              $lte: args.input_water.water_max,
            },
          },
          {
            "water_prefferences.water_max": {
              $gte: args.input_water.water_min,
            },
          },
        ],
      };
    }
  } catch (error) {}
};
const setSiteInterval = (searchString, args) => {
  try {
    if (
      (args.input_site.site_max == "0" || args.input_site.site_max) &&
      (args.input_site.site_min == "0" || args.input_site.site_min)
    ) {
      searchString.input_site = {
        site: {
          $gte: args.input_site.site_min,
          $lte: args.input_site.site_max,
        },
      };
    }
  } catch (error) {}
};
const setIsPoisonous = (searchString, args) => {
  try {
    if (args.input_poisonous == false || args.input_poisonous) {
      searchString.input_poisonous = {
        poisonous: args.input_poisonous,
      };
    }
  } catch (error) {}
};
const setHasFruit = (searchString, args) => {
  try {
    if (args.input_fruit == false || args.input_fruit) {
      searchString.input_fruit = {
        fruit: args.input_fruit,
      };
    }
  } catch (error) {}
};
const setHasFlowers = (searchString, args) => {
  try {
    if (args.input_flowers == false || args.input_flowers) {
      searchString.input_flowers = {
        flowers: args.input_flowers,
      };
    }
  } catch (error) {}
};
const setIsSaltTolerant = (searchString, args) => {
  try {
    if (args.input_salt == false || args.input_salt) {
      searchString.input_salt = {
        salt_tolerance: args.input_salt,
      };
    }
  } catch (error) {}
};
const setRoot = (searchString, args) => {
  try {
    if (args.input_root) {
      searchString.input_root = {
        root_system: {
          $in: args.input_root,
        },
      };
    }
  } catch (error) {}
};
const setPlantType = (searchString, args) => {
  try {
    if (args.input_type) {
      searchString.input_type = {
        plant_type: {
          $in: args.input_type,
        },
      };
    }
  } catch (error) {}
};
const setSoil = (searchString, args) => {
  try {
    if (args.input_soil) {
      searchString.input_soil = {
        soil_types: {
          $in: args.input_soil,
        },
      };
    }
  } catch (error) {}
};

exports.keyToSearchString = keyToSearchString;
