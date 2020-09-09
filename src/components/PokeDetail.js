import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Stats from "./Stats";
import Abilities from "./Abilities";
import Types from "./Types";
import Sprites from "./Sprites";
import PokeDetailCard from "./PokeDetailCard.js";
import "./../css/PokeDetail.css";


const PokeDetail = ({
  match: {
    params: { id },
  }
}) => {
  
  return (
    <div>
      <PokeDetailCard id={id} />
    </div>
  );
};

export default PokeDetail;
