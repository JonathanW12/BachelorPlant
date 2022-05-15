export const returnFields = {
  _id: { active: true, field: "_id", ref: "id" },
  botanical_name: {
    active: true,
    field: "botanical_name",
    ref: "Botanisk navn",
  },
  danish_name: { active: true, field: "danish_name", ref: "Dansk navn" },
  foliage: { active: false, field: "foliage", ref: "Bladtype" },
  fruit: { active: false, min: 0, max: 1, v0: 0, v1: 1, ref: "Frugter" },
  flowers: { active: false, min: 0, max: 1, v0: 0, v1: 1, ref: "Blomster" },
  poisonous: { active: true, min: 0, max: 1, v0: 0, v1: 1, ref: "Giftig" },
  root_system: {
    active: false,
    v0: {
      klatrerod: { field: "klatrerod", checked: true },
      pælerod: { field: "pælerod", checked: true },
      trævlrod: { field: "trævlrod", checked: true },
      rodknold: { field: "rodknold", checked: true },
      luftrod: { field: "luftrod", checked: true },
      rodstængel: { field: "rodstængel", checked: true },
    },
    ref: "Rod system",
  },
  salt_tolerance: {
    active: true,
    min: 0,
    max: 1,
    v0: 0,
    v1: 1,
    ref: "Salt tolerance",
  },
  site: { active: true, min: 1, max: 5, v0: 1, v1: 5, ref: "Sollys" },
  soil_types: {
    active: false,
    v0: {
      sandjord: { field: "sandjord", checked: true },
      lerjord1: { field: "lerjord 10-25%", checked: true },
      lerjord2: { field: "lerjord 20-40%", checked: true },
      lerjord3: { field: "lerjord 40%", checked: true },
      siltjord: { field: "siltjord", checked: true },
    },
    ref: "Jord typer",
  },
  plant_type: {
    active: false,
    v0: {
      træ: { field: "træ", checked: true },
      busk: { field: "busk", checked: true },
      slyng_plante: { field: "slyng plante", checked: true },
      gras: { field: "gras", checked: true },
      urt: { field: "urt", checked: true },
    },
    ref: "Plant type",
  },
  wind_tolerance: {
    active: true,
    min: 1,
    max: 3,
    v0: 1,
    v1: 3,
    ref: " Vind tolerance",
  },
  description: { active: false, field: "description", ref: "Beskrivelse" },
  water_prefferences: {
    active: true,
    min: 1,
    max: 5,
    v0: 2,
    v1: 5,
    ref: "Vand forbrug",
  },
  size_height: { active: true, min: 0, max: 50, v0: 2, v1: 28, ref: "Højde" },
  size_spread: { active: false, min: 0, max: 30, v0: 0, v1: 30, ref: "Brede" },
  ph_tolerance: {
    active: false,
    min: 5,
    max: 9,
    v0: 5,
    v1: 9,
    ref: "Ph tolerance",
  },
};
export const returnFieldsInitialValue = { ...returnFields };

export const getActiveHeaders = () => {
  let ids = Object.keys(returnFields).map((key, index) => {
    if (returnFields[key].active === false) {
      return key;
    }
    return;
  });
  return ids.filter(Boolean);
};

export const getActiveReturnData = () => {
  let ids = Object.keys(returnFields).map((key, index) => {
    if (returnFields[key].active === true) {
      switch (key) {
        case "size_height":
          return "size_height {size_min,size_max}";
        case "size_spread":
          return "size_spread {size_min,size_max}";
        case "ph_tolerance":
          return "ph_tolerance {ph_min,ph_max}";
        case "water_prefferences":
          return "water_prefferences {water_min,water_max}";
        default:
          return key;
      }
    }
  });
  //adding mandatory fields
  ids.push("botanical_name", "pictures {url, tag, origin}");
  ids = ids.filter(Boolean).join();
  return ids;
};

export const getActiveSearchQuery = (returnFields) => {
  let ids = Object.keys(returnFields).map((key, index) => {
    switch (key) {
      case "plant_type":
        let req_type = [];
        Object.entries(returnFields.plant_type.v0).forEach(([key, value]) => {
          if (value.checked) {
            req_type.push(value.field.toString());
          }
        });
        if (
          req_type.length !== Object.keys(returnFields.plant_type.v0).length
        ) {
          return `input_type:${JSON.stringify(req_type)}`;
        } else {
          break;
        }
      case "soil_types":
        var req_soil = [];
        Object.entries(returnFields.soil_types.v0).forEach(([key, value]) => {
          if (value.checked) {
            req_soil.push(value.field.toString());
          }
        });
        if (
          req_soil.length !== Object.keys(returnFields.soil_types.v0).length
        ) {
          return `input_soil:${JSON.stringify(req_soil)}`;
        } else {
          break;
        }
      case "root_system":
        let req_root = [];
        Object.entries(returnFields.root_system.v0).forEach(([key, value]) => {
          if (value.checked) {
            req_root.push(value.field.toString());
          }
        });
        if (
          req_root.length !== Object.keys(returnFields.root_system.v0).length
        ) {
          return `input_root:${JSON.stringify(req_root)}`;
        } else {
          break;
        }
      case "size_height":
        if (
          returnFields.size_height.min !== returnFields.size_height.v0 ||
          returnFields.size_height.max !== returnFields.size_height.v1
        ) {
          return `input_height: {size_min: ${returnFields.size_height.v0}, size_max: ${returnFields.size_height.v1}}`;
        } else {
          break;
        }
      case "size_spread":
        if (
          returnFields.size_spread.min !== returnFields.size_height.v0 ||
          returnFields.size_spread.max !== returnFields.size_spread.v1
        ) {
          return `input_spread: {size_min:${returnFields.size_spread.v0},size_max:${returnFields.size_spread.v1}}`;
        } else {
          break;
        }
      case "ph_tolerance":
        if (
          returnFields.ph_tolerance.min !== returnFields.ph_tolerance.v0 ||
          returnFields.ph_tolerance.max !== returnFields.ph_tolerance.v1
        ) {
          return `input_ph: {ph_min:${returnFields.ph_tolerance.v0},ph_max:${returnFields.ph_tolerance.v1}}`;
        } else {
          break;
        }
      case "site":
        if (
          returnFields.site.min !== returnFields.site.v0 ||
          returnFields.site.max !== returnFields.site.v1
        ) {
          return `input_site: {site_min:${returnFields.site.v0},site_max:${returnFields.site.v1}}`;
        } else {
          break;
        }
      case "wind_tolerance":
        if (
          returnFields.wind_tolerance.min !== returnFields.wind_tolerance.v0 ||
          returnFields.wind_tolerance.max !== returnFields.wind_tolerance.v1
        ) {
          return `input_wind:{wind_min:${returnFields.wind_tolerance.v0},wind_max:${returnFields.wind_tolerance.v1}}`;
        } else {
          break;
        }
      case "water_prefferences":
        if (
          returnFields.water_prefferences.min !==
            returnFields.water_prefferences.v0 ||
          returnFields.water_prefferences.max !==
            returnFields.water_prefferences.v1
        ) {
          return `input_water:{water_min:${returnFields.water_prefferences.v0},water_max:${returnFields.water_prefferences.v1}}`;
        } else {
          break;
        }
      case "poisonous":
        if (
          returnFields.poisonous.min !== returnFields.poisonous.v0 ||
          returnFields.poisonous.max !== returnFields.poisonous.v1
        ) {
          if (returnFields.poisonous.v0) {
            return `input_poisonous:true`;
          } else {
            return `input_poisonous:false`;
          }
        } else {
          break;
        }
      case "flowers":
        if (
          returnFields.flowers.min !== returnFields.flowers.v0 ||
          returnFields.flowers.max !== returnFields.flowers.v1
        ) {
          if (returnFields.flowers.v0) {
            return `input_flowers:true`;
          } else {
            return `input_flowers:false`;
          }
        } else {
          break;
        }
      case "fruit":
        if (
          returnFields.fruit.min !== returnFields.fruit.v0 ||
          returnFields.fruit.max !== returnFields.fruit.v1
        ) {
          if (returnFields.fruit.v0) {
            return `input_fruit:true`;
          } else {
            return `input_fruit:false`;
          }
        } else {
          break;
        }
      case "salt_tolerance":
        if (
          returnFields.salt_tolerance.min !== returnFields.salt_tolerance.v0 ||
          returnFields.salt_tolerance.max !== returnFields.salt_tolerance.v1
        ) {
          if (returnFields.salt_tolerance.v0) {
            return `input_salt:true`;
          } else {
            return `input_salt:false`;
          }
        } else {
          break;
        }
      default:
        return undefined;
    }
  });
  ids = ids.filter(Boolean).join();
  if (ids === "") {
    ids = `input_easteregg:"test"`;
  }
  return ids;
};
