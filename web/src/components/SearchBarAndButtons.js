import React, { useState, useEffect } from "react";
import CustomButton from "../components/CustomButton";
import { getPlantsByName } from "../components/QueryHandler";
import "../css/SearchBarAndButtons.css";

function SearchBarAndButtons(props) {
  const [input, setInput] = useState("");

  async function updateTableByName(input_name) {
    const res = await getPlantsByName(input_name);
    props._setTableData(res);
  }

  return (
    <div className="searchBarOuterContainer">
      <div className="searchByNameContainer">
        <input
          value={input}
          type="text"
          name="searchByNameInput"
          placeholder="Søg på plantenavn eller art..."
          onInput={(i) => setInput(i.target.value)}
          onKeyDown={(event) =>
            event.key === "Enter" && updateTableByName(input.toLowerCase())
          }
        ></input>
        <div className="nameButton">
          <button
            style={{ backgroundColor: props._filterOpen ? "white" : "#BBCF97" }}
            onClick={() => updateTableByName(input.toLowerCase())}
          >
            Søg med navn
          </button>
        </div>
      </div>
      <div className="filterButton">
        <button
          style={{ backgroundColor: props._filterOpen ? "white" : "#BBCF97" }}
          onClick={() => {
            props._setFilterOpen(!props._filterOpen);
          }}
        >
          {props._filterOpen ? "Luk filtermuligheder" : "Søg med filtre"}
        </button>
      </div>
    </div>
  );
}
export default SearchBarAndButtons;
