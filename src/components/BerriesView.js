import React, { useState, useEffect } from "react";
import ErrorHandler from "./ErrorHandler";
import "./../css/BerriesView.css";

const Berries = () => {
  const [berries, setBerries] = useState();
  const [error, setError] = useState("");

  // Fetchin data from nested API
  useEffect(() => {
    const pendingPromises = [];
    for (let i = 1; i <= 64; i++) {
      pendingPromises.push(
        fetch("https://pokeapi.co/api/v2/berry/" + i)
          .then((response) => response.json())
          .then((response) => response)
          .catch((errorMsg) => {
            let errorOutput = `Error: ${errorMsg}`;
            setError(errorOutput);
          })
      );
    }
    Promise.all(pendingPromises).then((response) => {
      const pendingPromises2 = response.map((element) => {
        return fetch(element.item.url)
          .then((response) => response.json())
          .then((response) => {
            return response;
          })
          .catch((errorMsg) => {
            let errorOutput = `Error: ${errorMsg}`;
            setError(errorOutput);
          });
      });
      Promise.all(pendingPromises2).then((response) => {
        setBerries(response);
        setError("");
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
                <img alt="berry symbol" id="berryImage" src={berry.sprites.default} />
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
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default Berries;
