import React from "react";
import { Link } from "react-router-dom";
import PokeDetailCard from "./PokeDetailCard"
import "./../css/CombatView.css";
import { isPropertySignature } from "typescript";

const CombatView = ({
  match: {
    params: { pokemon1, pokemon2 }
  }
}) => {return (
<div className="combat">
  <div>{pokemon1} vs. {pokemon2}</div>
  <div className="pokemon1"><PokeDetailCard id={pokemon1}/></div>
  <div className="pokemon2"><PokeDetailCard id={pokemon2}/></div>
</div>
)};

export default CombatView;
