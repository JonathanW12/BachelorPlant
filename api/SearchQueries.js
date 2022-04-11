function keyToSearchString(args, key) {
  const searchString = {
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
    default: "",
  };
  console.log(searchString[key] || searchString["default"]);
  return searchString[key] || searchString["default"];
}

exports.keyToSearchString = keyToSearchString;
