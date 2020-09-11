import React from "react";
import "./../css/HoverIcon.css";

export default function HoverIcon(props) {
  return (
    <div className={`poke-hovericon ${props.type}`}>
      <div className={`poke-type-icon`}>
        <span className="description">{props.type}</span>
      </div>
    </div>
  );
}
