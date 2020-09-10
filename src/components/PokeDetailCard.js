import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Stats from "./Stats";
import Abilities from "./Abilities";
import Types from "./Types";
import Sprites from "./Sprites";
import ErrorHandler from "./ErrorHandler";
import "./../css/PokeDetail.css";

// URL has to be followed by Pokemon number
const detailURL = "https://pokeapi.co/api/v2/pokemon/";

const PokeDetailCard = ({ id }) => {
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
          <h1>Name: {id}</h1>
          {/* <img src={data.sprites.front_default} alt={data.name} /> */}
          <Sprites data={data} />
          <Link to="/">Return</Link>
          {/*passing existing data to avoid refetch for detail components*/}
          <Abilities id={data.id} data={data} />
          <Types id={data.id} data={data} />
          <Stats id={data.id} data={data} />
        </div>
      ) : null}
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default PokeDetailCard;
