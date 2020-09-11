import React, { useState, useEffect } from "react";
import ErrorHandler from "./ErrorHandler";
import HoverIcon from "./HoverIcon";
import "./../css/Types.css";

const Types = ({ id, data }) => {
  const [typesArray, setTypesArray] = useState([]);
  const [error, setError] = useState("");

  const pokeAPI = "https://pokeapi.co/api/v2/pokemon/" + id;

  useEffect(() => {
    if (data) {
      //console.log("accessing data for pokemon types");
      setTypesArray(data.types);
    } else {
      //console.log("fetching data for pokemon types");
      fetch(pokeAPI)
        .then((response) => response.json())
        .then((response) => {
          setTypesArray(response.types);
        })
        .catch((errorMsg) => {
          let errorOutput = `Error: ${errorMsg}`;
          setError(errorOutput);
        });
    }
  }, [pokeAPI, data, id]);

  const displayTypes = () => {
    let types = [];

    for (let key in typesArray) {
<<<<<<< HEAD
      types.push(
        <div key={typesArray[key].type.name}>
          types: {typesArray[key].type.name};
        </div>
      );
=======
      //types.push(<div key={typesArray[key].type.name}>types: {typesArray[key].type.name};</div>);
      types.push(<HoverIcon key={typesArray[key].type.name} type={typesArray[key].type.name} />)
>>>>>>> 7560cb54a6b0f6f7f64000b1e2f6a6acc0d7ef9c
    }
    return types;
  };

  return (
    <div id="types">
<<<<<<< HEAD
      <h3>Types</h3>
      {typesArray.length ? displayTypes() : null}
      {error ? <ErrorHandler errorMessage={error} /> : null}
=======
      <h1>Types</h1>
      <div className="types-icons">
        {typesArray.length ? displayTypes() : null}
        {error ? <ErrorHandler errorMessage={error} /> : null}
      </div>
>>>>>>> 7560cb54a6b0f6f7f64000b1e2f6a6acc0d7ef9c
    </div>
  );
};
export default Types;
