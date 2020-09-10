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
      <Link to={`/detail/${data.name}`}>
        <h3>{pokeNameUpperCase(data.name)}</h3>
        <h4>#{id}</h4>
        {HQimg(data.name, id)}
      </Link>
      {/* Possibility to add more data from already existing components */}
      {/* <Stats id={id} /> */}

      <div className="buttonWrapper">
        <button id="btnLeft" onClick={() => choiceOne(data.name)}>
          Player 1
        </button>
        <img
          id="pokeBall"
          alt="Poke-Ball"
          src="https://lh3.googleusercontent.com/proxy/vq-0h5jw142poYgIWblQ09Nwb8wdfD7JV_2GKrJTfLARrwC0Mq1HgI-1ksBtk4rxuoT8lWNKY_RNIE_xRre2VEUlA7V-PgPKDOdur0gT7mPu7YzoG9OTD1-PClzM4-Cb5g"
        />
        <button id="btnRight" onClick={() => choiceTwo(data.name)}>
          Player 2
        </button>
      </div>
    </div>
  );
};
export default CardList;
