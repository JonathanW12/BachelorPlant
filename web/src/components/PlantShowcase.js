import React, { useState, useEffect } from "react";
import { PlantToString } from "./PlantToString";
import "../css/PlantShowcase.css";

//temp
import aesculus1 from "../aesculus_hippocastanum_fall.jpg";
import aesculus2 from "../aesculus_hippocastanum_2.jpg";
import aesculus3 from "../aesculus_hippocastanum_3.jpg";
import { acer_dividii } from "../testData";

function PlantShowcase(props) {
  const [activePlant, setActivePlant] = useState(0);

  const loadData = () => {
    return acer_dividii;
  };

  useEffect(() => {
    console.log(acer_dividii);
    setActivePlant(loadData());
  });

  const renderAttribute = (key, value) => {
    if (key === "description" || key === "_id") return;
    return (
      <p key={key}>
        {key}:
        <span className="plantValue">{PlantToString(activePlant, key)}</span>
      </p>
    );
  };

  return (
    <div className="singlePlant">
      <img src={aesculus1} alt="test" />
      <div className="innerPlantShowcaseContainer">
        <h1 className="botanicalName">{activePlant.botanical_name}</h1>
        <h1>{activePlant.danish_name}</h1>
        <p className="_description">{activePlant.description}</p>
        <div className="plantAtt">
          {Object.keys(activePlant).map((key, value) =>
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
