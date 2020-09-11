import React, { useState, useEffect } from "react";

import Stats from "./Stats";
import Abilities from "./Abilities";
import Types from "./Types";
import Sprites from "./Sprites";
import ErrorHandler from "./ErrorHandler";
import "./../css/PokeDetail.css";

// URL has to be followed by Pokemon number
const detailURL = "https://pokeapi.co/api/v2/pokemon/";

const PokeDetailCard = (props) => {
  const {id, transferData, includeMoves, moveHandler, moveStatus, btnDisabled}=props;

  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonStatus, setPokemonStatus] = useState("");

  const pokeNameUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const getDetailData = () => {
      //console.log("fetching details");

      fetch(detailURL + id)
        .then((response) => response.json())
        .then((data) => {

          if (transferData) {
            console.log("Transferring data to parent");

            // if transferData and includeMoves is set in parent
            // e.g. <PokeDetailCard [...] transferData={[...]} includeMoves />
            // then moves are fetched into the dataset as well
            if (includeMoves) {
              console.log("Attaching moves data to parent");
              const pendingMovesFetches = data.moves.map((element, index) => {
                return fetch(element.move.url)
                  .then((rawMove) => rawMove.json())
                  .then((formattedMove) => formattedMove)
                  .catch((e) => console.log(e));
              });

              // Promise.all takes a pending promise array as a param
              // then will pass the finished promises array down
              // update the pokemon with the finished promises array for moves
              Promise.all(pendingMovesFetches).then((finishedPromise) => {
                data.moves = finishedPromise;
                //console.log(data.moves);

                transferData(data);
              });
            } else {
              transferData(data);
            }
          }
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
  }, [id, transferData, includeMoves]);

  return (
    <div className="container">
      {isLoading ? <div>Loading...</div> : null}
      {data && data.sprites ? (
        <div className="card">
          <h1>{pokeNameUpperCase(id)}</h1>
          {moveStatus!=undefined?(<span className="poke-move-status">{moveStatus}</span>):(null)}
          {/* <img src={data.sprites.front_default} alt={data.name} /> */}
          <Sprites data={data} />
          <button className="btn-return">
            <Link to="/">Return</Link>
          </button>
          {moveHandler?(<button className="btn-fight" disabled={btnDisabled} onClick={moveHandler}>
           FIGHT! 
          </button>):(null)}

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
