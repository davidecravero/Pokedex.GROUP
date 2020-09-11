import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PokeList from "./components/PokeList";
import PokeDetail from "./components/PokeDetail";
import BerriesView from "./components/BerriesView";
import CombatView from "./components/CombatView";
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
            <Link className="link" to="/">
              Pokemons
            </Link>
          </li>
          <li>
            <div id="fightBar">
              {displayPlayerOne && displayPlayerOne.length ? (
                <div className="playerWrapper pWLeft">
                  <div className="pOne">Player 1</div>
                  <div className="playerOne">{displayPlayerOne} </div>
                </div>
              ) : null}

              {displayPlayerOne && displayPlayerOne.length && displayPlayerTwo && displayPlayerTwo.length ? (
                <Link className="link" to={`/Combat/${displayPlayerOne}/${displayPlayerTwo}`}>
                  Combat
                </Link>
              ) : null}

              {displayPlayerTwo && displayPlayerTwo.length ? (
                <div className="playerWrapper pWRight">
                  <div className="pTwo">Player 2</div>
                  <div className="playerTwo">{displayPlayerTwo} </div>
                </div>
              ) : null}
            </div>
          </li>
          <li>
            <Link className="link" to="/Berries">
              Berries
            </Link>
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
