import React, { useState, useEffect } from "react";
import "./../css/Stats.css";

const Stats = () => {
  const [statsArray, setStatsArray] = useState([]);

  const testURL = "https://pokeapi.co/api/v2/pokemon/1";

  useEffect(() => {
    fetch(testURL)
      .then((response) => response.json())
      .then((data) => {
        setStatsArray(data.stats);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const displayStats = () => {
    let stats = [];
    console.log(statsArray);
    console.log(statsArray[1]);
    console.log(statsArray[1].base_stat);
    console.log(statsArray[1].stat.name);
    for (let key in statsArray) {
      stats.push(
        <div key={statsArray[key].stat.name}>
          Stat: {statsArray[key].stat.name}, BST: {statsArray[key].base_stat}
        </div>
      );
    }
    return stats;
  };

  //HP (Hit Points)
  //Attack (while physical move)
  //Defense (damage by physical move
  //Special (Special Attack and special Defense by special move))
  //Speed (Acting first during battle)
  //Accuracy (Chance for attack^ to hit - beginning 100%)
  //Evasion (Chance for move missing) - beginning 0%
  // from 0 to 255
  //BST = Basestat

  //if statName === "HP" Display Symbol
  // Inlinesystle for div using `$bst %`

  return (
    <div>
      <h1>Test</h1>
      {/*  <div className="meter red">
        <span style={{ width: "50%" }}></span>
      </div>
      <div className="meter orange">
        <span style={{ width: "20%" }}></span>
      </div>
      <div className="meter">
        <span style={{ width: "10%" }}></span>
      </div> */}
      {statsArray.length ? displayStats() : null}
      {/* {error ? consonole.log("error") : null} */}
    </div>
  );
};

export default Stats;
