import React, { useState } from "react";
import "./../css/Stats.css";

const Stats = (props) => {
  const [statsArray, setStatsArray] = useState([]);

  const testURL = `https://pokeapi.co/api/v2/pokemon/${props.propsData.id}`;
  console.log(testURL);
  console.log(props.propsData.id);
  console.log(props);

  /*  useEffect(() => {
    fetch(testURL)
      .then((response) => response.json())
      .then((data) => {
        setStatsArray(data.stats);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); */

  const displayStats = () => {
    let stats = [];
    console.log(statsArray);
    console.log(statsArray[1]);
    console.log(statsArray[1].base_stat);
    console.log(statsArray[1].stat.name);
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
      {/* {error ? consonole.log("error") : null} */}
    </div>
  );
};

export default Stats;
