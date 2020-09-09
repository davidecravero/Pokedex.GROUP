import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PokeList from "./components/PokeList.js";
import PokeDetail from "./components/PokeDetail.js";
import BerriesView from "./components/BerriesView.js";
import CombatView from "./components/CombatView.js";
import "./styles.css";

function App() {
  return (
    <Router className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Pokemons</Link>
          </li>
          <li>
            <Link to="/Combat">Combat</Link>
          </li>
          <li>
            <Link to="/Berries">Berries</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={PokeList} />
        <Route path="/detail/:id" component={PokeDetail} />
        <Route path="/Berries" component={BerriesView} />
        <Route path="/Combat/:pokemon1/:pokemon2" component={CombatView} />
      </Switch>
    </Router>
  );
}

export default App;
