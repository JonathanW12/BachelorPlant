import "./css/App.css";
import PlantShowcase from "./components/PlantShowcase";
import PlantTable from "./components/PlantTable";
import SearchOptions from "./components/SearchOptions";
import React, { useState, useEffect } from "react";
import { acer_dividii } from "./data/testData";
import {
  getPlantById,
  getPlantsByArgs,
  getCountByArgs,
  getInitialPlants,
} from "./components/QueryHandler";
import SearchBarAndButtons from "./components/SearchBarAndButtons";
import TableOptions from "./components/TableOptions";
import {
  returnFields,
  getActiveHeaders,
  returnFieldsInitialValue,
} from "./data/QueryData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { CSVLink } from "react-csv";
import { CsvHeaders } from "./data/CsvHeaders";

function App() {
  //Selected plant
  const [activePlant, setActivePlant] = useState(acer_dividii);
  const [tableData, setTableData] = useState([]);
  const [hiddenColumns, setHiddenColumns] = useState(getActiveHeaders());
  const [filterData, setFilterData] = useState(returnFields);
  const [filterResultsAmount, setFilterReultsAmount] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);

  async function updateTableDataByArgs() {
    const res = await getPlantsByArgs(filterData);
    setTableData(res);
  }

  useEffect(() => {
    async function setInitialData() {
      const res = await getInitialPlants();
      setTableData(res);
    }
    setInitialData();
  }, []);

  useEffect(() => {
    async function updateResultCount() {
      const res = await getCountByArgs(filterData);
      setFilterReultsAmount(res);
    }
    updateResultCount();
  }, [filterData]);

  async function updateActivePlant(_id) {
    const res = await getPlantById(_id);
    setActivePlant(res);
  }

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
              _filterOpen={filterOpen}
            />
            <div className="reactiveButtonContainer">
              <button
                onClick={() => {
                  updateTableDataByArgs();
                  setFilterOpen(!filterOpen);
                }}
              >
                Vis {filterResultsAmount} planter
              </button>
            </div>
            <hr></hr>
          </div>
        )}
        <TableOptions
          _setTableData={setTableData}
          _hiddenColumns={hiddenColumns}
          _setHiddenColumns={setHiddenColumns}
        />
        <div className="dataContainer">
          <PlantTable
            tData={tableData}
            _updateActivePlant={updateActivePlant}
            _hiddenColumns={hiddenColumns}
          />
        </div>
        <div className="downloadButtonDiv">
          <button>
            <CSVLink
              data={tableData}
              className="downloadButton"
              filename="plant_data"
              headers={CsvHeaders}
            >
              Download til excel {<FontAwesomeIcon icon={faDownload} />}
            </CSVLink>
          </button>
        </div>
      </div>
      <PlantShowcase data={activePlant} />
    </div>
  );
}

export default App;
