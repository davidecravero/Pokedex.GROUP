import React, { useState, useEffect } from "react";
import ErrorHandler from "./ErrorHandler";
import "./../css/Abilities.css";

const Abilities = ({ id, data }) => {
  const [abilitiesArray, setAbilitiesArray] = useState([]);
  const [error, setError] = useState("");

  const pokeapi = "https://pokeapi.co/api/v2/pokemon/" + id;

  useEffect(() => {
    if (data) {
      // Accessing data for pokemon abilities
      setAbilitiesArray(data.abilities);
    } else {
      // Fetching data for pokemon abilities
      fetch(pokeapi)
        .then((response) => response.json())
        .then((response) => {
          setAbilitiesArray(response.abilities);
        })
        .catch((errorMsg) => {
          let errorOutput = `Error: ${errorMsg}`;
          setError(errorOutput);
        });
    }
  }, [pokeapi, data, id]);

  const displayAbilities = () => {
    let abilities = [];

    for (let key in abilitiesArray) {
      let ability = abilitiesArray[key].ability.name;
      abilities.push(
        <div key={abilitiesArray[key].ability.name} className="ability-text">
          {ability}
        </div>
      );
    }
    return abilities;
  };

  return (
    <div id="abilities">
      <h3>Abilities</h3>
      {abilitiesArray.length ? displayAbilities() : null}
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};
export default Abilities;
