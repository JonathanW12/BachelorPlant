export const PlantToString = (data, feature) => {
  switch (feature) {
    case "flowers":
      return "Ja";
    case "ph_tolerance":
      return (
        data.ph_tolerance.ph_min + " til " + data.ph_tolerance.ph_max + " ph"
      );
    case "size_height":
      return (
        data.size_height.size_min + " til " + data.size_height.size_max + "m"
      );
    case "size_spread":
      return (
        data.size_spread.size_min + " til " + data.size_spread.size_max + "m"
      );
    case "water_prefferences":
      return (
        data.water_prefferences.water_min +
        " til " +
        data.water_prefferences.water_max
      );
    case "botanical_name":
      return data.botanical_name;
    case "danish_name":
      return data.danish_name;
    case "foliage":
      return data.foliage;
    case "fruit":
      if (data.fruit) return "Frugtbærende";
      else return "Ingen frugt";
    case "poisonous":
      if (data.poisonous) return "Kan være giftig";
      else return "Ikke giftig";
    case "salt_tolerance":
      if (data.salt_tolerance) return "Robust";
      else return "Sensitiv";
    case "root_system":
      var roots = "";
      for (var element in data.root_system) {
        roots += data.root_system[element] + " ";
      }
      return roots;
    case "site":
      return data.site + "/5 sol";
    case "soil_types":
      var soil = "";
      for (var element in data.soil_types) {
        soil += data.soil_types[element] + " ";
      }
      return soil;
    case "wind_tolerance":
      if (data.wind_tolerance === "1") return "Sensitiv";
      if (data.wind_tolerance === "2") return "Tolerant";
      if (data.wind_tolerance === "3") return "Meget tolerant";
    case "plant_type":
      return data.plant_type;
  }
};
