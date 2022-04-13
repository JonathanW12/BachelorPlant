import React, { useState, useEffect } from "react";
import { PlantToString } from "./PlantToString";
import "../css/PlantShowcase.css";
import { ColumnsTemplate } from "./ColumnsTemplate";

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
    if (key === "description" || key === "_id") return;
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

  return (
    <div className="singlePlant">
      <img src={aesculus1} alt="test" />
      <div className="innerPlantShowcaseContainer">
        <h1 className="botanicalName">{props.data.botanical_name}</h1>
        <h1>{props.data.danish_name}</h1>
        <p className="_description">{props.data.description}</p>
        <div className="plantAtt">
          {Object.keys(props.data).map((key, value) =>
            renderAttribute(key, value)
          )}
        </div>
        <div className="plantShowcaseImageContainer">
          <img src={aesculus2} alt="test" />
          <img src={aesculus3} alt="test" />
        </div>
      </div>
    </div>
  );
}
export default PlantShowcase;
