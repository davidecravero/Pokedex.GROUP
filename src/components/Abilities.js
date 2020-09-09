import React, { useState, useEffect } from "react";
import "./../css/Abilities.css";

const Abilities = (props) => {
  const [abilitiesArray, setAbilitiesArray] = useState([]);
  const pokeapi = "https://pokeapi.co/api/v2/pokemon/" + props.id;

  useEffect(() => {
    if (props.data){
      //console.log("accessing data for pokemon abilities");
      setAbilitiesArray(props.data.abilities);
    }else{
      //console.log("fetching data for pokemon abilities");
    fetch(pokeapi)
      .then((response) => response.json())
      .then((data) => {
        setAbilitiesArray(data.abilities);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }, [pokeapi, props.data, props.id]);

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
      {abilitiesArray.length ? displayAbilities() : null}
    </div>
  );
};
export default Abilities;
