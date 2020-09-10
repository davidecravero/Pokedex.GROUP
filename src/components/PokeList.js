import React, { useState, useEffect } from "react";
import ErrorHandler from "./ErrorHandler";
import CardList from "./../components/CardList.js";
import "./../css/PokeList.css";

const listUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";

const PokeList = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [currentSearch, setCurrentSearch] = useState([]);

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

  const handleSearch = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (data && data.length) {
      const results = data.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()));
      setCurrentSearch(results);
    }
  }, [data, inputValue]);

  return (
    <div className="container">
      <div id="imageWrapper">
        <img id="logo" src="https://i.redd.it/ihmki0cl1s331.jpg" alt="pokemon-logo" />
      </div>
      <div id="searchWrapper">
        <input id="searchInput" type="text" value={inputValue} onChange={handleSearch} placeholder="Search Pokémon" />
      </div>

      <div className="list">
        {currentSearch && currentSearch.length
          ? currentSearch.map((item) => {
              return <CardList key={item.name} data={item} choiceOne={props.choiceOne} choiceTwo={props.choiceTwo} />;
            })
          : null}
        {/*   {error ? <div className="poke-error">{error}</div> : null} */}
        {error ? <ErrorHandler errorMessage={error} /> : null}
      </div>
    </div>
  );
};

export default PokeList;
