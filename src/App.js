import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListScreen from "./screens/ListScreen";
import DetailScreen from "./screens/DetailScreen";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListScreen />} exact />
        <Route path="/detail/:id" element={<DetailScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
