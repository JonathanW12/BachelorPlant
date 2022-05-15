import React, { useState, useEffect } from "react";
import { PlantToString } from "../data/PlantToString";
import "../css/PlantShowcase.css";
import CustomImage from "./CustomImage";
import useWindowDimensions from "./WindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { returnFields } from "../data/QueryData";

function PlantShowcase(props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, [props.data]);
  useEffect(() => {
    setIsOpen(false);
  }, []);
  const renderAttribute = (key, data) => {
    if (key === "description" || key === "_id" || key === "pictures") return;
    return (
      <div className="keyValueText" key={key}>
        {" "}
        <span key={key} className="plantHeader">
          {returnFields[key].ref}:
        </span>
        <span className="plantValue">{PlantToString(props.data, key)}</span>
      </div>
    );
  };

  const renderRemainingImages = (d, startingIndex) => {
    let images = [];
    for (let index = startingIndex; index < d.length; index++) {
      images.push(
        <div className="remainingImgInner" key={d[index].tag}>
          <CustomImage className="remainingImg" props={d[index]} />
        </div>
      );
    }
    return images;
  };
  if (useWindowDimensions().width > 1450) {
    return (
      <div className="singlePlant">
        <div className="firstPictureContainer">
          <CustomImage props={props.data.pictures[0]} />
        </div>
        <div className="innerPlantShowcaseContainer">
          <h1 className="botanicalName">
            {PlantToString(props.data, "botanical_name")}
          </h1>
          <h1>{PlantToString(props.data, "danish_name")}</h1>
          <p className="_description">{props.data.description}</p>
          <div className="plantAtt">
            {Object.keys(props.data).map((key, value) =>
              renderAttribute(key, value)
            )}
          </div>
          <div className="remainingImgOuter">
            {renderRemainingImages(props.data.pictures, 1)}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        {isOpen && (
          <div>
            <div
              onClick={() => setIsOpen(false)}
              className="entireBackground"
            ></div>
            <div className="popUp">
              <div className="popUpButtonDiv">
                <button onClick={() => setIsOpen(false)}>
                  <FontAwesomeIcon icon={faRemove} />
                </button>
              </div>
              <div className="remainingImgOuter">
                {renderRemainingImages(props.data.pictures, 0)}
              </div>
              <div className="innerPlantShowcaseContainer">
                <h1 className="botanicalName">
                  {PlantToString(props.data, "botanical_name")}
                </h1>
                <h1>{PlantToString(props.data, "danish_name")}</h1>
                <p className="_description">{props.data.description}</p>
                <div className="plantAtt">
                  {Object.keys(props.data).map((key, value) =>
                    renderAttribute(key, value)
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default PlantShowcase;
