import React from "react";
import "./App.css";
import Home from "./components/Home";
import Macro1 from "./components/Macro1";
import Macro2 from "./components/Macro2";
import Macro3 from "./components/Macro3";
import SavedRecipes from "./components/SavedRecipes";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
//route renders out a component based on the URL

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/macro1" element={<Macro1 />} />
          <Route path="/macro2" element={<Macro2 />} />
          <Route path="/macro3" element={<Macro3 />} />
          <Route path="/savedrecipes" element={<SavedRecipes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
