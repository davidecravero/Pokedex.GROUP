import React from "react";
import "./../css/Sprites.css";

const Sprites = (props) => {
  console.log("Props data: ");
  console.log(props.data.id);

  return (
    <div id="imageWrapper">
      <img alt={`${props.data.name}`} title={`${props.data.name}`} src={`https://pokeres.bastionbot.org/images/pokemon/${props.data.id}.png`} />
    </div>
  );
};

export default Sprites;
