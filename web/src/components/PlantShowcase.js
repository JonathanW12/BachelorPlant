import React, { useState, useEffect } from "react";
import { PlantToString } from "./PlantToString";
import "../css/PlantShowcase.css";

//temp
import aesculus1 from "../aesculus_hippocastanum_fall.jpg";
import aesculus2 from "../aesculus_hippocastanum_2.jpg";
import aesculus3 from "../aesculus_hippocastanum_3.jpg";

function PlantShowcase(props) {
  const renderAttribute = (key) => {
    if (key === "description" || key === "_id") return;
    return (
      <p key={key}>
        {key}:
        <span className="plantValue">{PlantToString(props.data, key)}</span>
      </p>
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
