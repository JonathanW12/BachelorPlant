import React, { useState, useReducer, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faCheckSquare,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import "../css/TableOptions.css";
import { returnFields, getActiveHeaders } from "../data/QueryData";
import { ColumnsTemplate } from "../data/ColumnsTemplate";

function TableOptions(props) {
  const [showingColumns, setShowingColumns] = useState(false);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const findHeaderById = (_id) => {
    var head = Object.values(ColumnsTemplate).find((e) => e.id === _id);
    return head.Header;
  };

  const checkBoxComponent = (key, label) => {
    return (
      <div className="checkBox">
        <button
          onClick={() => {
            label.active = !label.active;
            forceUpdate();
            props._setHiddenColumns(getActiveHeaders());
          }}
        >
          <span>{findHeaderById(key)}</span>
          {!props._hiddenColumns.includes(key) ? (
            <FontAwesomeIcon className="checked" icon={faCheckSquare} />
          ) : (
            <FontAwesomeIcon className="unChecked" icon={faSquare} />
          )}
        </button>
      </div>
    );
  };

  return (
    <div className="tableOptionsContainer">
      <div className="buttonContainer">
        <button
          value={"hello"}
          onClick={() => setShowingColumns(!showingColumns)}
        >
          {showingColumns ? (
            <span>Skjul tabelmuligheder</span>
          ) : (
            <span>Vis tabelmuligheder</span>
          )}
          {
            <FontAwesomeIcon
              icon={faPlay}
              rotation={showingColumns ? 270 : 90}
            />
          }
        </button>
      </div>
      {showingColumns && (
        <div>
          <div className="checkBoxContainer">
            {checkBoxComponent("danish_name", returnFields.danish_name)}
            {checkBoxComponent("site", returnFields.site)}
            {checkBoxComponent("wind_tolerance", returnFields.wind_tolerance)}
            {checkBoxComponent("size_spread", returnFields.size_spread)}
            {checkBoxComponent("poisonous", returnFields.poisonous)}
            {checkBoxComponent("plant_type", returnFields.plant_type)}
            {checkBoxComponent("fruit", returnFields.fruit)}
            {checkBoxComponent(
              "water_prefferences",
              returnFields.water_prefferences
            )}
            {checkBoxComponent("flowers", returnFields.flowers)}
            {checkBoxComponent("root_system", returnFields.root_system)}
            {checkBoxComponent("ph_tolerance", returnFields.ph_tolerance)}
            {checkBoxComponent("soil_types", returnFields.soil_types)}
            {checkBoxComponent("size_height", returnFields.size_height)}
            {checkBoxComponent("salt_tolerance", returnFields.salt_tolerance)}
          </div>
          <div className="updateTableButtonContainer">
            <button onClick={() => setShowingColumns(!showingColumns)}>
              Opdater tabel
            </button>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
}
export default TableOptions;
