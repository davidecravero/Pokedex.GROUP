import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../css/CardList.css";
import Abilities from "./Abilities";
import Types from "./Types";
import Stats from "./Stats";
import "./../css/CardList.css";
import { getJSDocTemplateTag, getConstantValue } from "typescript";

const highResImageURL =
  "https://pokeres.bastionbot.org/images/pokemon/[id].png";

// get pokemon id from details url (index doesn't match pokemon number)
const HQimg = (name, id) => {
  let result = (
    <img
      className="poke-image"
      src={highResImageURL.replace("[id]", id)}
      alt={"HQ image of " + name}
      title={"HQ image of " + name}
    />
  );
  return result;
};
// get pokemon id from details url (index doesn't match pokemon number)
const extractID = (pokeURL) => {
  // parse whether url ends on / and remove it if it does
  let result =
    pokeURL.slice(-1) === "/"
      ? pokeURL.substring(0, pokeURL.length - 1)
      : pokeURL;
  // now find last / before id
  result = result.substring(result.lastIndexOf("/") + 1);
  return result;
};

const CardList = (props) => {
  const id = extractID(props.data.url);

  const pokeNameUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="poke-card-list">
      <h2>{pokeNameUpperCase(props.data.name)}</h2>
      <h3>#{id}</h3>
      {HQimg(props.data.name, id)}
      {/* <Stats id={id} /> */}
      <Link to={`/detail/${props.data.name}`}>View Details</Link>
      <div className="buttonWrapper">
        <button id="btnRight" onClick={() => props.choiceOne(props.data.name)}>
          Player 1
        </button>
        <img
          id="pokeBall"
          alt="Poke-Ball"
          src="https://i.etsystatic.com/12696278/r/il/bb21a8/1868980486/il_570xN.1868980486_d6zs.jpg"
        />
        <button id="btnLeft" onClick={() => props.choiceTwo(props.data.name)}>
          Player 2
        </button>
      </div>
    </div>
  );
};
export default CardList;
