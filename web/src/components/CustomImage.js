import React from "react";
import defaultPic from "../undefined_plant_pic.png";

function CustomImage({ props }) {
  const pic = {
    url: props && "url" in props ? props.url : defaultPic,
    tag: props && "tag" in props ? props.tag : "No picture available",
    origin:
      props && "origin" in props ? props.origin : "No origin story to tell",
  };
  return <img src={pic.url} alt={pic.tag} loading="lazy" />;
}
export default CustomImage;
