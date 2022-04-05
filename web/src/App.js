import "./css/App.css";
import CustomButton from "./components/CustonButton";
import PlantShowcase from "./components/PlantShowcase";
import PlantTable from "./components/PlantTable";
import React, { useState } from "react";
import { acer_dividii } from "./testData";
import { getPlantById, getAllPlantData } from "./components/QueryHandler";

function App() {
  //Selected plant
  const [activePlant, setActivePlant] = useState(acer_dividii);
  async function updateActivePlant(id) {
    const res = await getPlantById(id);
    console.log("res is: " + res);
    setActivePlant(res);
  }
  //Plant data
  const [tableData, setTableData] = useState([]);
  async function updateTableData() {
    const res = await getAllPlantData();
    console.log(res);
    setTableData(res);
  }
  return (
    <div className="App">
      <div className="searchAndData">
        <div className="searchBar">
          <input
            type="text"
            name="searchByNameInput"
            placeholder="Søg på plantenavn eller art..."
          ></input>
          <CustomButton
            onClick={() => {
              updateTableData();
            }}
            title="Søg med navn"
            width="200px"
          ></CustomButton>
          <CustomButton
            title="Søg med filtre"
            width="256px"
            margin="0 0 0 30px"
            onClick={() => updateActivePlant("623c43d4df51c462316e05dd")}
          ></CustomButton>
        </div>
        <div className="dataContainer">
          <PlantTable tData={tableData} />
        </div>
      </div>
      <hr />
      <PlantShowcase data={activePlant} />
    </div>
  );
}

export default App;
