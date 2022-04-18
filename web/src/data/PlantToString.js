export const PlantToString = (data, feature) => {
  switch (feature) {
    case "pictures":
      return "";
    case "flowers":
      return data.flowers ? "Ja" : "Ingen";
    case "ph_tolerance":
      return (
        data.ph_tolerance.ph_min + " - " + data.ph_tolerance.ph_max + " ph"
      );
    case "size_height":
      return (
        data.size_height.size_min + " - " + data.size_height.size_max + "m"
      );
    case "size_spread":
      return (
        data.size_spread.size_min + " - " + data.size_spread.size_max + "m"
      );
    case "water_prefferences":
      return (
        data.water_prefferences.water_min +
        "/5 - " +
        data.water_prefferences.water_max +
        "/5"
      );
    case "botanical_name":
      var tempName = data.botanical_name;
      tempName = tempName.charAt(0).toUpperCase() + tempName.slice(1);
      return tempName;
    case "danish_name":
      return data.danish_name;
    case "foliage":
      return data.foliage;
    case "fruit":
      return data.fruit ? "Ja" : "Ingen";
    case "poisonous":
      return data.poisonous ? "Kan være giftig" : "Ikke giftig";
    case "salt_tolerance":
      return data.salt_tolerance ? "Robust" : "Sensitiv";
    case "root_system":
      var roots = "";
      for (var element in data.root_system) {
        roots += data.root_system[element] + ", ";
      }
      return roots.slice(0, -2);
    case "site":
      return data.site + "/5 sol";
    case "soil_types":
      var soil = "";
      for (var element in data.soil_types) {
        soil += data.soil_types[element] + ", ";
      }
      return soil.slice(0, -2);
    case "wind_tolerance":
      if (data.wind_tolerance === 1) return "Sensitiv";
      if (data.wind_tolerance === 2) return "Tolerant";
      if (data.wind_tolerance === 3) return "Meget tolerant";
    case "plant_type":
      var p_type = "";
      for (var element in data.plant_type) {
        p_type += data.plant_type[element] + ", ";
      }
      return p_type.slice(0, -2);
    default:
      return " ";
  }
};
