import React, { useState, useEffect } from "react";
import "./../css/Abilities.css";

const Abilities = (props) => {
  const [abilitiesArray, setAbilitiesArray] = useState([]);
  const pokeapi = "https://pokeapi.co/api/v2/pokemon/" + props.id;

  useEffect(() => {
    fetch(pokeapi)
      .then((response) => response.json())
      .then((data) => {
        setAbilitiesArray(data.abilities);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const displayAbilities = () => {
    let abilities = [];

    for (let key in abilitiesArray) {
      abilities.push(<div key={abilitiesArray[key].ability.name}>abilities: {abilitiesArray[key].ability.name};</div>);
    }
    return abilities;
  };

  return (
    <div id="abilities">
      <h1>Abilities</h1>
      {}
      {abilitiesArray.length ? displayAbilities() : null}
      {}
    </div>
  );
};
export default Abilities;
