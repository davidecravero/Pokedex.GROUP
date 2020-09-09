import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PokeList from "./components/PokeList.js";
import PokeDetail from "./components/PokeDetail.js";
import BerriesView from "./components/BerriesView.js";
import CombatView from "./components/CombatView.js";
import "./styles.css";

function App() {
  const [displayPlayerOne, setDisplayPlayerOne] = useState("");
  const [displayPlayerTwo, setDisplayPlayerTwo] = useState("");

  const handleDisplayOne = (pokeName) => {
    setDisplayPlayerOne(pokeName);
  };

  const handleDisplayTwo = (pokeName) => {
    setDisplayPlayerTwo(pokeName);
  };

  return (
    <Router className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Pokemons</Link>
          </li>
          <li>
            <div id="fightBar">
              {displayPlayerOne && displayPlayerOne.length ? (
                <div className="playerWrapper">
                  <div className="pOne">P1</div>
                  <div className="playerOne">{displayPlayerOne} </div>
                </div>
              ) : null}

              {displayPlayerOne && displayPlayerOne.length && displayPlayerTwo && displayPlayerTwo.length ? <Link to="/Combat">Combat</Link> : null}

              {displayPlayerTwo && displayPlayerTwo.length ? (
                <div className="playerWrapper">
                  <div className="pTwo">P2</div>
                  <div className="playerTwo">{displayPlayerTwo} </div>
                </div>
              ) : null}
            </div>
          </li>
          <li>
            <Link to="/Berries">Berries</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <PokeList choiceOne={handleDisplayOne} choiceTwo={handleDisplayTwo} />
        </Route>
        <Route path="/detail/:id" component={PokeDetail} />
        <Route path="/Berries" component={BerriesView} />
        <Route path="/Combat/:pokemon1/:pokemon2" component={CombatView} />
      </Switch>
    </Router>
  );
}

export default App;
