import React from "react";
import { Link } from "react-router-dom";
import "./../css/CardList.css";

const highResImageURL =
  "https://pokeres.bastionbot.org/images/pokemon/[id].png";

// Get pokemon id from details url (index doesn't match pokemon number)
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

// Get pokemon id from details url (index doesn't match pokemon number)
const extractID = (pokeURL) => {
  // Parse whether url ends on / and remove it if it does
  let result =
    pokeURL.slice(-1) === "/"
      ? pokeURL.substring(0, pokeURL.length - 1)
      : pokeURL;
  // Now find last / before id
  result = result.substring(result.lastIndexOf("/") + 1);
  return result;
};

const CardList = ({ data, choiceOne, choiceTwo }) => {
  const id = extractID(data.url);

  const pokeNameUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="poke-card-list">
      <h2>{pokeNameUpperCase(data.name)}</h2>
      <h3>#{id}</h3>
      {HQimg(data.name, id)}

      {/* Possibility to add more data from already existing components */}
      {/* <Stats id={id} /> */}
      <Link to={`/detail/${data.name}`}>View Details</Link>
      <div className="buttonWrapper">
        <button id="btnLeft" onClick={() => choiceOne(data.name)}>
          Player 1
        </button>
        <img
          id="pokeBall"
          alt="Poke-Ball"
          src="https://i.etsystatic.com/12696278/r/il/bb21a8/1868980486/il_570xN.1868980486_d6zs.jpg"
        />
        <button id="btnRight" onClick={() => choiceTwo(data.name)}>
          Player 2
        </button>
      </div>
    </div>
  );
};
export default CardList;
