import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Musk from "./components/musk/Musk";
import Bezos from "./components/bezos/Bezos";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Musk" component={Musk} />
          <Route path="/Bezos" component={Bezos} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
