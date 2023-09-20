import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import ListScreen from "./screens/ListScreen";
import DetailScreen from "./screens/DetailScreen";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ListScreen} />
        <Route path="/detail/:id" component={DetailScreen} />
      </Switch>
    </Router>
  );
}

export default App;
