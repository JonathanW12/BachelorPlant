export const PlantToString = (data, feature) => {
  switch (feature) {
    case "pictures":
      return "";
    case "flowers":
      if (data.flowers === undefined) {
        break;
      }
      return data.flowers ? "Ja" : "Ingen";
    case "ph_tolerance":
      if (data.ph_tolerance === undefined) {
        break;
      }
      return (
        data.ph_tolerance.ph_min + " - " + data.ph_tolerance.ph_max + " ph"
      );
    case "size_height":
      if (data.size_height === undefined) {
        break;
      }
      return (
        data.size_height.size_min + " - " + data.size_height.size_max + "m"
      );
    case "size_spread":
      if (data.size_spread === undefined) {
        break;
      }
      return (
        data.size_spread.size_min + " - " + data.size_spread.size_max + "m"
      );
    case "water_prefferences":
      if (data.water_prefferences === undefined) {
        break;
      }
      return (
        data.water_prefferences.water_min +
        "/5 - " +
        data.water_prefferences.water_max +
        "/5"
      );
    case "botanical_name":
      let tempName = data.botanical_name;
      tempName = tempName.charAt(0).toUpperCase() + tempName.slice(1);
      return tempName;
    case "danish_name":
      return data.danish_name;
    case "foliage":
      return data.foliage;
    case "fruit":
      if (data.fruit === undefined) {
        break;
      }
      return data.fruit ? "Ja" : "Ingen";
    case "poisonous":
      if (data.poisonous === undefined) {
        break;
      }
      return data.poisonous ? "Kan være giftig" : "Ikke giftig";
    case "salt_tolerance":
      if (data.salt_tolerance === undefined) {
        break;
      }
      return data.salt_tolerance ? "Robust" : "Sensitiv";
    case "root_system":
      let roots = "";
      for (var element in data.root_system) {
        roots += data.root_system[element] + ", ";
      }
      return roots.slice(0, -2);
    case "site":
      return data.site + "/5 sol";
    case "soil_types":
      let soil = "";
      for (let element in data.soil_types) {
        soil += data.soil_types[element] + ", ";
      }
      return soil.slice(0, -2);
    case "wind_tolerance":
      if (data.wind_tolerance === 1) return "Sensitiv";
      if (data.wind_tolerance === 2) return "Tolerant";
      if (data.wind_tolerance === 3) return "Meget tolerant";
      break;
    case "plant_type":
      let p_type = "";
      for (let element in data.plant_type) {
        p_type += data.plant_type[element] + ", ";
      }
      return p_type.slice(0, -2);
    default:
      return " ";
  }
};
