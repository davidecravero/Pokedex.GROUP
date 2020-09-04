import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Stats from "./Stats";
import Abilities from "./Abilities";
import Types from "./Types";

// URL has to be followed by Pokemon number
const detailURL = "https://pokeapi.co/api/v2/pokemon/";

const PokeDetail = ({
  match: {
    params: { id },
  },
}) => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getDetailData = () => {
      console.log("fetching details");

      fetch(detailURL + id)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
          setIsLoading(false);
        })
        .catch((errorMsg) => {
          let errorOutput = `Error: ${errorMsg}`;
          console.log(errorOutput);
          setError(errorOutput);
        });
    };

    setIsLoading(true);
    getDetailData();
  }, [id]);

  return (
    <div className="container">
      {isLoading ? <div>Loading...</div> : null}
      {data && data.sprites ? (
        <div className="card">
          <h1>ID: {id}</h1>
          <img src={data.sprites.front_default} alt={data.name} />
          <Link to="/">Return</Link>
          <Stats />
          <Abilities id = {data.id} />
          <Types id = {data.id} />
        </div>
      ) : null}
      {error ? <div className="poke-error">{error}</div> : null}
    </div>
  );
};

export default PokeDetail;
