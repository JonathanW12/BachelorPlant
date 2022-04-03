import React from "react";
import "../css/CustonButton.css";

function CustomButton(props) {
  const myStyle = {
    width: props.width,
    margin: props.margin,
  };
  return <button style={myStyle}>{props.title}</button>;
}

export default CustomButton;
