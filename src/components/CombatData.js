import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const CombatData = () => {
  const [berries, setBerries] = useState();
  const id=25; //'pikachu'
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/" + id);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    const pendingPromises = [];
    for (let i = 1; i <= 64; i++) {
      pendingPromises.push(
        fetch("https://pokeapi.co/api/v2/berry/" + i)
          .then((value) => value.json())
          .then((value) => value)
          .catch((error) => setError(true))
      );
    }
    Promise.all(pendingPromises).then((value) => {
      const pendingPromises2 = value.map((element) => {
        return fetch(element.item.url)
          .then((value) => value.json())
          .then((value) => {
            return value;
          })
          .catch((error) => setError(true));
      });
      Promise.all(pendingPromises2).then((value) => {
        setBerries(value);
        setError(false);
      });
    });
  }, []);

  return (
    <div className="App">
      {berries && berries.length
        ? berries.map((berry) => {
            return (
              <div key={berry.name} id="berryWrapper">
                <div id="berryName">{berry.name}</div>
                <img id="berryImage" src={berry.sprites.default} />
                <div id="descriptionWrapper">
                  <div
                    className={`berryCategory
                  ${
                    berry.category.name === "medicine"
                      ? "medicine"
                      : berry.category.name === "picky-healing"
                      ? "pickyHealing"
                      : berry.category.name === "baking-only"
                      ? "bakingOnly"
                      : berry.category.name === "effort-drop"
                      ? "effortDrop"
                      : berry.category.name === "type-protection"
                      ? "typeProtection"
                      : berry.category.name === "in-a-pinch"
                      ? "inAPinch"
                      : ""
                  }`}>
                    Category: {berry.category.name}
                  </div>
                  <div id="berryEffect">Effect: {berry.effect_entries[0].effect} </div>
                </div>
              </div>
            );
          })
        : null}
      {/* <button onClick={() => loadMoreBerries()}>More berries</button> */}
    </div>
  );
};

export default CombatData;
