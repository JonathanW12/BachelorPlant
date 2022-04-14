import "./css/App.css";
import PlantShowcase from "./components/PlantShowcase";
import PlantTable from "./components/PlantTable";
import SearchOptions from "./components/SearchOptions";
import React, { useState, useEffect } from "react";
import { acer_dividii } from "./testData";
import {
  getPlantById,
  getAllPlantData,
  getPlantsByArgs,
} from "./components/QueryHandler";
import SearchBarAndButtons from "./components/SearchBarAndButtons";
import TableOptions from "./components/TableOptions";
import useWindowDimensions from "./components/WindowSize";
import { returnFields, getActiveHeaders } from "./QueryData";

function App() {
  //Selected plant
  const [activePlant, setActivePlant] = useState(acer_dividii);
  async function updateActivePlant(id) {
    const res = await getPlantById(id);
    setActivePlant(res);
  }
  //Plant data
  const [tableData, setTableData] = useState([]);
  const [hiddenColumns, setHiddenColumns] = useState(getActiveHeaders());
  const [filterData, setFilterData] = useState(returnFields);
  const [filterResultsAmount, setFilterReultsAmount] = useState(0);
  async function updateTableData() {
    const res = await getAllPlantData();
    setTableData(res);
  }

  useEffect(() => {
    async function updateResultCount() {
      const res = await getPlantsByArgs(filterData);
      console.log("count: " + res.length);
    }
    updateResultCount();
  }, [filterData]);

  //Filtering
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <div className="App">
      <div className="searchAndData">
        <SearchBarAndButtons
          _setTableData={setTableData}
          _setFilterOpen={setFilterOpen}
          _filterOpen={filterOpen}
        />
        {filterOpen && (
          <div className="filterOptions">
            <SearchOptions
              _setFilterData={setFilterData}
              _filterData={filterData}
              _filterResultsAmount={filterResultsAmount}
            />
          </div>
        )}
        <TableOptions
          _setTableData={setTableData}
          _setHiddenColumns={setHiddenColumns}
        />
        <div className="dataContainer">
          <PlantTable
            tData={tableData}
            activeP={setActivePlant}
            _hiddenColumns={hiddenColumns}
          />
        </div>
      </div>
      {useWindowDimensions().width > 1450 && (
        <PlantShowcase data={activePlant} />
      )}
    </div>
  );
}

export default App;
