import React from "react";
import { PlantToString } from "../data/PlantToString";
import "../css/PlantShowcase.css";
import { ColumnsTemplate } from "../data/ColumnsTemplate";
import CustomImage from "./CustomImage";

function PlantShowcase(props) {
  const findHeaderById = (_id) => {
    var head = Object.values(ColumnsTemplate).find((e) => e.id == _id);
    return head.Header;
  };

  const renderAttribute = (key, data) => {
    if (key === "description" || key === "_id" || key === "pictures") return;
    return (
      <div className="keyValueText" key={key}>
        {" "}
        <span key={key} className="plantHeader">
          {findHeaderById(key)}:
        </span>
        <span className="plantValue">{PlantToString(props.data, key)}</span>
      </div>
    );
  };

  const renderRemainingImages = (d) => {
    let images = [];
    for (let index = 1; index < d.length; index++) {
      images.push(
        <div className="remainingImgInner" key={d[index].tag}>
          <CustomImage className="remainingImg" props={d[index]} />
        </div>
      );
    }
    return images;
  };

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
          {renderRemainingImages(props.data.pictures)}
        </div>
      </div>
    </div>
  );
}
export default PlantShowcase;
