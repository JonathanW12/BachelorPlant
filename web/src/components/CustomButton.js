import React from "react";

function CustomButton(props) {
  const myStyle = {
    width: props.width,
    margin: props.margin,
  };
  return (
    <button style={myStyle} onClick={props.onClick}>
      {props.title}
    </button>
  );
}

export default CustomButton;
