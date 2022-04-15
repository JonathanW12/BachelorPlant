import React, { useState } from "react";
import ReactSlider from "react-slider";
import "../css/SearchOptions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faCheckSquare,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";

/*
This file is absolute hell. A straight up nightmare. But it works:)
*/

function SearchOptions({ _filterData, _setFilterData }) {
  const startingData = { ..._filterData };

  const twoNumberSlider = (data, unit, minDist, func) => {
    return (
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[data.v0, data.v1]}
        min={data.min}
        max={data.max}
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
  const stringArraySlider = (data, minDist, func, marks) => {
    return (
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[data.v0, data.v1]}
        min={data.min}
        max={data.max}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => <div {...props}></div>}
        minDistance={minDist}
        onAfterChange={func}
        pearling
        marks={marks}
        markClassName="example-mark"
      />
    );
  };
  const checkBoxComponent = (data, func) => {
    return (
      <div>
        <button onClick={func}>
          {data.checked ? (
            <FontAwesomeIcon className="checked" icon={faCheckSquare} />
          ) : (
            <FontAwesomeIcon className="unChecked" icon={faSquare} />
          )}
          <span>{data.field}</span>
        </button>
      </div>
    );
  };

  return (
    <div className="searchOptionsOuterContainer">
      <div className="largeSlidersContainer">
        <div className="singleSearchOptionContainer">
          <h2>Højde voksen</h2>
          {twoNumberSlider(startingData.size_height, "m", 2, (val) => {
            _setFilterData({
              ..._filterData,
              size_height: {
                ..._filterData.size_height,
                v0: val[0],
                v1: val[1],
              },
            });
          })}
        </div>
        <div className="singleSearchOptionContainer">
          <h2>Bredde voksen</h2>
          {twoNumberSlider(startingData.size_spread, "m", 2, (val) => {
            _setFilterData({
              ..._filterData,
              size_spread: {
                ..._filterData.size_spread,
                v0: val[0],
                v1: val[1],
              },
            });
          })}
        </div>
        <div className="singleSearchOptionContainer">
          <h2>Vandforbrug</h2>
          {stringArraySlider(
            startingData.water_prefferences,
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
            },
            [2, 3, 4]
          )}
          <div className="stringArray">
            <span>Tørt</span>
            <span>Vådt</span>
          </div>
        </div>
        <div className="singleSearchOptionContainer">
          <h2>Sollys</h2>
          {stringArraySlider(
            startingData.site,

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
            },
            [2, 3, 4]
          )}
          <div className="stringArray">
            <span>Skygge</span>
            <span>Fuld sol</span>
          </div>
        </div>
        <div className="singleSearchOptionContainer">
          <h2>ph Tolerance</h2>
          {twoNumberSlider(startingData.ph_tolerance, " ph", 0, (val) => {
            _setFilterData({
              ..._filterData,
              ph_tolerance: {
                ..._filterData.ph_tolerance,
                v0: val[0],
                v1: val[1],
              },
            });
          })}
        </div>
      </div>
      <div className="checkBoxOptionsContainer">
        <div className="singleSearchOptionContainer">
          <h2>Type</h2>
          {checkBoxComponent(startingData.plant_type.v0.træ, () => {
            _setFilterData({
              ..._filterData,
              plant_type: {
                ..._filterData.plant_type,
                v0: {
                  ..._filterData.plant_type.v0,
                  træ: {
                    ..._filterData.plant_type.v0.træ,
                    checked: !_filterData.plant_type.v0.træ.checked,
                  },
                },
              },
            });
          })}
          {checkBoxComponent(startingData.plant_type.v0.busk, () => {
            _setFilterData({
              ..._filterData,
              plant_type: {
                ..._filterData.plant_type,
                v0: {
                  ..._filterData.plant_type.v0,
                  busk: {
                    ..._filterData.plant_type.v0.busk,
                    checked: !_filterData.plant_type.v0.busk.checked,
                  },
                },
              },
            });
          })}
          {checkBoxComponent(startingData.plant_type.v0.slyng_plante, () => {
            _setFilterData({
              ..._filterData,
              plant_type: {
                ..._filterData.plant_type,
                v0: {
                  ..._filterData.plant_type.v0,
                  slyng_plante: {
                    ..._filterData.plant_type.v0.slyng_plante,
                    checked: !_filterData.plant_type.v0.slyng_plante.checked,
                  },
                },
              },
            });
          })}
          {checkBoxComponent(startingData.plant_type.v0.gras, () => {
            _setFilterData({
              ..._filterData,
              plant_type: {
                ..._filterData.plant_type,
                v0: {
                  ..._filterData.plant_type.v0,
                  gras: {
                    ..._filterData.plant_type.v0.gras,
                    checked: !_filterData.plant_type.v0.gras.checked,
                  },
                },
              },
            });
          })}
          {checkBoxComponent(startingData.plant_type.v0.urt, () => {
            _setFilterData({
              ..._filterData,
              plant_type: {
                ..._filterData.plant_type,
                v0: {
                  ..._filterData.plant_type.v0,
                  urt: {
                    ..._filterData.plant_type.v0.urt,
                    checked: !_filterData.plant_type.v0.urt.checked,
                  },
                },
              },
            });
          })}
        </div>
      </div>
      <div className="smallSearchOptionsContainer">
        <div className="singleSearchOptionContainer">
          <h2>Vind tolerance</h2>
          {stringArraySlider(
            startingData.wind_tolerance,
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
            },
            [2]
          )}
          <div className="stringArray">
            <span>Sensitiv</span>
            <span>Robust</span>
          </div>
        </div>

        <div className="singleSearchOptionContainer">
          <h2>Frugt</h2>
          {stringArraySlider(
            startingData.fruit,
            0,
            (val) => {
              _setFilterData({
                ..._filterData,
                fruit: {
                  ..._filterData.fruit,
                  v0: val[0],
                  v1: val[1],
                },
              });
            },
            []
          )}
          <div className="stringArray">
            <span>Ingen</span>
            <span>Ja</span>
          </div>
        </div>
        <div className="singleSearchOptionContainer">
          <h2>Blomster</h2>
          {stringArraySlider(
            startingData.flowers,
            0,
            (val) => {
              _setFilterData({
                ..._filterData,
                flowers: {
                  ..._filterData.flowers,
                  v0: val[0],
                  v1: val[1],
                },
              });
            },
            []
          )}
          <div className="stringArray">
            <span>Ingen</span>
            <span>Ja</span>
          </div>
        </div>
        <div className="singleSearchOptionContainer">
          <h2>Salt tolerance</h2>
          {stringArraySlider(
            startingData.salt_tolerance,
            0,
            (val) => {
              _setFilterData({
                ..._filterData,
                salt_tolerance: {
                  ..._filterData.salt_tolerance,
                  v0: val[0],
                  v1: val[1],
                },
              });
            },
            []
          )}
          <div className="stringArray">
            <span>Sensitiv</span>
            <span>Robust</span>
          </div>
          <div className="singleSearchOptionContainer">
            <h2>Giftig</h2>
            {stringArraySlider(
              startingData.poisonous,
              0,
              (val) => {
                _setFilterData({
                  ..._filterData,
                  poisonous: {
                    ..._filterData.poisonous,
                    v0: val[0],
                    v1: val[1],
                  },
                });
              },
              []
            )}
            <div className="stringArray">
              <span>Ikke giftig</span>
              <span>Kan være giftig</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchOptions;
