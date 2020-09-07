import React, { useState, useEffect } from "react";

const Types = (props) => {
  const [typesArray, setTypesArray] = useState([]);

  const pokeAPI = "https://pokeapi.co/api/v2/pokemon/"+props.id;

  useEffect(() => {
    if (props.data){
      //console.log("accessing data for pokemon types");
      setTypesArray(props.data.types);
    }else{
      //console.log("fetching data for pokemon types");
    fetch(pokeAPI)
      .then((response) => response.json())
      .then((data) => {
        setTypesArray(data.types);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }, [pokeAPI, props.data, props.id]);

  const displayTypes = () => {
    let types = [];
   
    for (let key in typesArray) {
      types.push(
        <div key={typesArray[key].type.name}>
          types: {typesArray[key].type.name};
        </div>
      );
    }
    return types;
  };

  return (
    <div>
      <h1>Types</h1>
      {}
      {typesArray.length ? displayTypes() : null}
      {}
    </div>
  );
};
export default Types;