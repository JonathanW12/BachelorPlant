import React, { useState, useReducer, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faCheckSquare,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import "../css/TableOptions.css";
import { returnFields, getActiveHeaders } from "../data/QueryData";

function TableOptions(props) {
  const [showingColumns, setShowingColumns] = useState(false);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const checkBoxComponent = (key) => {
    return (
      <div className="checkBox" key={key}>
        <button
          onClick={() => {
            returnFields[key].active = !returnFields[key].active;
            props._setHiddenColumns(getActiveHeaders());
          }}
        >
          <span>{returnFields[key].ref}</span>
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
            {Object.keys(returnFields).map((key, value) => {
              if (
                key === "description" ||
                key === "_id" ||
                key === "pictures" ||
                key === "botanical_name"
              ) {
                return;
              }
              return checkBoxComponent(key);
            })}
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
