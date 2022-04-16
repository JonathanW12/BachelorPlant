import { getActiveSearchQuery } from "../QueryData";
const url = "http://localhost:4000/graphql";

let queryData = {
  returnData: `
    _id
    botanical_name
    danish_name
    foliage
    fruit
    flowers
    poisonous
    root_system
    salt_tolerance
    site
    soil_types
    plant_type
    wind_tolerance
    description
    water_prefferences {
      water_min
      water_max
    }
    size_height {
      size_min
      size_max
    }
    size_spread {
      size_min
      size_max
    }
    ph_tolerance {
      ph_min
      ph_max
    }
    pictures{
      url,
      tag,
      origin,
    }
    `,
};
export async function getPlantById(_id) {
  const id = _id;
  const requestQuery = {
    query: `
        query {
        singlePlant (_id:"${id}"){
          ${queryData.returnData}   
        }
    }
    `,
  };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(requestQuery),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error("Failed request!");
      }
      return res.json();
    })
    .then((resData) => {
      return resData.data.singlePlant;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
}

export async function getAllPlantData() {
  const requestQuery = {
    query: `
        query {
          plants{
            ${queryData.returnData}  
          }
      }
      `,
  };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(requestQuery),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error("Failed request!");
      }
      return res.json();
    })
    .then((resData) => {
      return resData.data.plants;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
}

export async function getPlantsByName(input_name) {
  const requestQuery = {
    query: `
        query {
        plantByName (input_name:"${input_name}"){
          ${queryData.returnData}
        }
    }
    `,
  };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(requestQuery),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error("Failed request!");
      }
      return res.json();
    })
    .then((resData) => {
      return resData.data.plantByName;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
}

export async function getPlantsByArgs(args) {
  const requestQuery = {
    query: `
        query {
          plantsMultipleArgs(
            ${getActiveSearchQuery(args)}, 
          ){
          ${queryData.returnData}
        }
    }
    `,
  };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(requestQuery),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error("Failed request!");
      }
      return res.json();
    })
    .then((resData) => {
      return resData.data.plantsMultipleArgs;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
}

export async function getCountByArgs(args) {
  const requestQuery = {
    query: `
        query {
          plantsMultipleArgsCount(
            ${getActiveSearchQuery(args)}, 
          )
    }
    `,
  };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(requestQuery),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error("Failed request!");
      }
      return res.json();
    })
    .then((resData) => {
      return resData.data.plantsMultipleArgsCount;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
}
