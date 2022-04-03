import React, { useState, useEffect } from "react";
import aesculus from "../aesculus_hippocastanum_fall.jpg";
import { acer_dividii } from "../testData";
import { PlantToString } from "./PlantToString";
import "../css/PlantShowcase.css";

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
    <div>
      <img src={aesculus} alt="test" />
      <h1>{activePlant.botanical_name}</h1>
      <h1>{activePlant.danish_name}</h1>
      <p>{activePlant.description}</p>
      <div className="plantAtt">
        {Object.keys(activePlant).map((key, value) =>
          renderAttribute(key, value)
        )}
      </div>
    </div>
  );
}
export default PlantShowcase;
