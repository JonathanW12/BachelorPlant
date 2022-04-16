import React, { useState, useEffect } from "react";
import { PlantToString } from "./PlantToString";
import "../css/PlantShowcase.css";
import { ColumnsTemplate } from "./ColumnsTemplate";
import CustomImage from "./CustomImage";

//temp
import aesculus1 from "../aesculus_hippocastanum_fall.jpg";
import aesculus2 from "../aesculus_hippocastanum_2.jpg";
import aesculus3 from "../aesculus_hippocastanum_3.jpg";

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
    for (let index = 1; index < d.length; index++) {
      return <CustomImage className="bottomPictures" props={d[index]} />;
    }
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
        <div className="plantShowcaseImageContainer">
          {renderRemainingImages(props.data.pictures)}
        </div>
      </div>
    </div>
  );
}
export default PlantShowcase;
