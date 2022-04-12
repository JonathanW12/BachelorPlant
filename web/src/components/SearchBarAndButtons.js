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
          <CustomButton
            onClick={() => updateTableByName(input.toLowerCase())}
            title="Søg med navn"
          ></CustomButton>
        </div>
      </div>
      <div className="filterButton">
        <CustomButton
          title="Søg med filtre"
          onClick={() => props._setFilterOpen(true)}
        ></CustomButton>
      </div>
    </div>
  );
}
export default SearchBarAndButtons;
