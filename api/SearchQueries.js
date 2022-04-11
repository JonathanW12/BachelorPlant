function keyToSearchString(args, key) {
  var searchString = {
    size_height: {
      $and: [
        {
          "size_height.size_min": {
            $lte: args.size_height.size_max,
          },
        },
        {
          "size_height.size_max": {
            $gte: args.size_height.size_min,
          },
        },
      ],
    },
    wind_interval: {
      wind_tolerance: {
        $gte: args.wind_interval.wind_min,
        $lte: args.wind_interval.wind_max,
      },
    },
    ph_interval: {
      $gte: args.ph_interval.ph_min,
      $lte: args.ph_interval.ph_max,
    },
    size_spread: {
      $and: [
        {
          "size_spread.size_min": {
            $lte: args.size_spread.size_min,
          },
        },
        {
          "size_spread.size_max": {
            $gte: args.size_spread.size_min,
          },
        },
      ],
    },
    water_prefferences: {},
    site_interval: {
      $gte: args.site_interval.site_min,
      $lte: args.site_interval.site_max,
    },
    plant_type: {},
    root_system: {},
    soil_types: {},
    default: "",
  };
  console.log(searchString[key] || searchString["default"]);
  return searchString[key] || searchString["default"];
}

exports.keyToSearchString = keyToSearchString;
