import React, { useState } from "react";
import { Box } from "@mui/system";
import CustomButton from "./CustomButton";
import ReactSlider from "react-slider";
import { ColumnsTemplate } from "./ColumnsTemplate";
import "../css/SearchOptions.css";
import { data } from "./SearchData";
import { returnFields } from "../QueryData";

function SearchOptions({ _filterData, _setFilterData, _filterResultsAmount }) {
  const startingData = { ..._filterData };

  const twoNumberSlider = (min, max, v0, v1, unit, minDist, func) => {
    return (
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[v0, v1]}
        min={min}
        max={max}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => (
          <div {...props}>
            <span className="thumbText">
              {state.valueNow}
              {unit}
            </span>
          </div>
        )}
        minDistance={minDist}
        onAfterChange={func}
        pearling
      />
    );
  };

  return (
    <div className="searchOptionsOuterContainer">
      <div className="slidersContainer">
        <div className="singleSearchOptionContainer">
          <span>Højde voksen</span>
          {twoNumberSlider(
            startingData.size_height.min,
            startingData.size_height.max,
            startingData.size_height.v0,
            startingData.size_height.v1,
            "m",
            2,
            (val) => {
              _setFilterData({
                ..._filterData,
                size_height: {
                  ..._filterData.size_height,
                  v0: val[0],
                  v1: val[1],
                },
              });
            }
          )}
        </div>
      </div>
      <div className="singleSearchOptionContainer">
        <span>Bredde voksen</span>
        {twoNumberSlider(
          startingData.size_spread.min,
          startingData.size_spread.max,
          startingData.size_spread.v0,
          startingData.size_spread.v1,
          "m",
          2,
          (val) => {
            _setFilterData({
              ..._filterData,
              size_spread: {
                ..._filterData.size_spread,
                v0: val[0],
                v1: val[1],
              },
            });
          }
        )}
      </div>
      <div className="singleSearchOptionContainer">
        <span>Vandforbrug</span>
        {twoNumberSlider(0, 5, 0, 5, "/5", 0, (min, max) => {
          console.log(min, max);
        })}
      </div>
      <div className="singleSearchOptionContainer">
        <span>Sollys</span>
        {twoNumberSlider(0, 5, 0, 5, "/5", 0, (min, max) => {
          console.log(min, max);
        })}
      </div>
      <div className="singleSearchOptionContainer">
        <span>pH tolerance</span>
        {twoNumberSlider(5, 9, 5, 9, " ph", 1, (min, max) => {
          console.log(min, max);
        })}
      </div>
      <div className="buttonContainer">
        <button>hello {_filterResultsAmount}</button>
      </div>
    </div>
  );
}
export default SearchOptions;
