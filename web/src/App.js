import "./css/App.css";
import PlantShowcase from "./components/PlantShowcase";
import PlantTable from "./components/PlantTable";
import SearchOptions from "./components/SearchOptions";
import React, { useState } from "react";
import { acer_dividii } from "./testData";
import { getPlantById, getAllPlantData } from "./components/QueryHandler";
import SearchBarAndButtons from "./components/SearchBarAndButtons";
import { Search } from "@mui/icons-material";

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

  //Filtering
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <div className="App">
      <div className="searchAndData">
        <SearchBarAndButtons
          _setTableData={setTableData}
          _setFilterOpen={setFilterOpen}
        />
        {filterOpen && (
          <div className="filterOptions">
            <SearchOptions />
          </div>
        )}
        <div className="dataContainer">
          <PlantTable tData={tableData} activeP={setActivePlant} />
        </div>
      </div>
      <hr />
      <PlantShowcase data={activePlant} />
    </div>
  );
}

export default App;
