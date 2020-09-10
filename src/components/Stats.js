import React, { useState, useEffect } from "react";
import ErrorHandler from "./ErrorHandler";
import "./../css/Stats.css";

const Stats = ({ id, data }) => {
  const [statsArray, setStatsArray] = useState([]);
  const [error, setError] = useState("");

  console.log("ID:" + id);

  const pokeApiURL = "https://pokeapi.co/api/v2/pokemon/" + id;

  useEffect(() => {
    if (data) {
      // Accessing data for pokemon stats
      setStatsArray(data.stats);
    } else {
      // Fetching data for pokemon stats
      fetch(pokeApiURL)
        .then((response) => response.json())
        .then((response) => {
          setStatsArray(response.stats);
        })
        .catch((errorMsg) => {
          let errorOutput = `Error: ${errorMsg}`;
          setError(errorOutput);
        });
    }
  }, [pokeApiURL, id, data]);

  const displayStats = () => {
    let stats = [];
    for (let element in statsArray) {
      stats.push(
        <div key={statsArray[element].stat.name}>
          <div className="wrapper">
            <span className="statName">{statsArray[element].stat.name}</span>
            <div
              className={`meter ${
                statsArray[element].stat.name === "hp"
                  ? "red"
                  : statsArray[element].stat.name === "attack"
                  ? "yellow"
                  : statsArray[element].stat.name === "defense"
                  ? ""
                  : statsArray[element].stat.name === "special-attack"
                  ? "orange"
                  : statsArray[element].stat.name === "special-defense"
                  ? "darkGreen"
                  : statsArray[element].stat.name === "speed"
                  ? "blue"
                  : ""
              }`}>
              <span className="bst" style={{ width: (statsArray[element].base_stat / 255) * 100 + "%" }}>
                {statsArray[element].base_stat}
              </span>
            </div>
          </div>
        </div>
      );
    }
    return stats;
  };

  // Basestat = BST (from 0 to 255 Points)
  // HP (Hit Points)
  // Attack (while physical move)
  // Defense (damage by physical move)
  // Special-attack (while special move))
  // Special-defense (damage by special move)
  // Speed (acting first during battle)

  return (
    <div>
      <h3 id="stat">Stat</h3>
      <div id="titleBar">Basestat(BST): 0 - 255</div>

      {statsArray.length ? displayStats() : null}
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default Stats;
