import React from "react";
import "./../css/Sprites.css";

const Sprites = ({ data }) => {
  //console.log(data.id);

  return (
    <div id="imageWrapper">
      <img alt={`${data.name}`} title={`${data.name}`} src={`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`} />
    </div>
  );
};

export default Sprites;
