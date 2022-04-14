import React, { useState } from "react";
import ReactSlider from "react-slider";
import "../css/SearchOptions.css";

function SearchOptions({ _filterData, _setFilterData }) {
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
          {twoNumberSlider(
            startingData.water_prefferences.min,
            startingData.water_prefferences.max,
            startingData.water_prefferences.v0,
            startingData.water_prefferences.v1,
            "/5",
            0,
            (val) => {
              _setFilterData({
                ..._filterData,
                water_prefferences: {
                  ..._filterData.water_prefferences,
                  v0: val[0],
                  v1: val[1],
                },
              });
            }
          )}
        </div>
        <div className="singleSearchOptionContainer">
          <span>Sollys</span>
          {twoNumberSlider(
            startingData.site.min,
            startingData.site.max,
            startingData.site.v0,
            startingData.site.v1,
            "/5",
            0,
            (val) => {
              _setFilterData({
                ..._filterData,
                site: {
                  ..._filterData.site,
                  v0: val[0],
                  v1: val[1],
                },
              });
            }
          )}
        </div>
        <div className="singleSearchOptionContainer">
          <span>ph Tolerance</span>
          {twoNumberSlider(
            startingData.ph_tolerance.min,
            startingData.ph_tolerance.max,
            startingData.ph_tolerance.v0,
            startingData.ph_tolerance.v1,
            " ph",
            0,
            (val) => {
              _setFilterData({
                ..._filterData,
                ph_tolerance: {
                  ..._filterData.ph_tolerance,
                  v0: val[0],
                  v1: val[1],
                },
              });
            }
          )}
        </div>
        <div className="singleSearchOptionContainer">
          <span>Vind tolerance</span>
          {twoNumberSlider(
            startingData.wind_tolerance.min,
            startingData.wind_tolerance.max,
            startingData.wind_tolerance.v0,
            startingData.wind_tolerance.v1,
            "/3",
            0,
            (val) => {
              _setFilterData({
                ..._filterData,
                wind_tolerance: {
                  ..._filterData.wind_tolerance,
                  v0: val[0],
                  v1: val[1],
                },
              });
            }
          )}
        </div>
      </div>
    </div>
  );
}
export default SearchOptions;
