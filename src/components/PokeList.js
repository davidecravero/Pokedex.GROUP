import React, { useState, useEffect } from "react";
import ErrorHandler from "./ErrorHandler";
import CardList from "./CardList.js";
import "./../css/PokeList.css";

const listUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";

const PokeList = ({ choiceOne, choiceTwo }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [currentSearch, setCurrentSearch] = useState([]);

  // Fetching Pokemon-data from API
  const getListData = () => {
    fetch(listUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.results);
      })
      .catch((errorMsg) => {
        let errorOutput = `Error: ${errorMsg}`;
        setError(errorOutput);
      });
  };

  useEffect(() => {
    getListData();
  }, []);

  // Search bar functionality I: Grabbing input value of search field
  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  // Search bar functionality II: Filtering pokemon-data in terms of input value and storing in currentSearch
  useEffect(() => {
    if (data && data.length) {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setCurrentSearch(results);
    }
  }, [data, inputValue]);

  return (
    <div className="container2">
      <div id="imageWrapper">
        <img
          id="logo"
          src="https://i.redd.it/ihmki0cl1s331.jpg"
          alt="pokemon-logo"
        />
      </div>
      <div id="searchWrapper">
        <input
          id="searchInput"
          type="text"
          value={inputValue}
          onChange={handleSearch}
          placeholder="Search Pokémon"
        />
      </div>

      <div className="list">
        {/* Displaying current search - if no input value in search bar, displaying all pokemon*/}
        {currentSearch && currentSearch.length
          ? currentSearch.map((item) => {
              return (
                <CardList
                  key={item.name}
                  data={item}
                  choiceOne={choiceOne}
                  choiceTwo={choiceTwo}
                />
              );
            })
          : null}

        {error ? <ErrorHandler errorMessage={error} /> : null}
      </div>
    </div>
  );
};

export default PokeList;
