import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function SavedRecipes() {
  return (
    <div>
      <h1 className="nav-links"> Saved Recipes</h1>
      <div className="back-links">
        <Link to="/">Go to Home Page</Link>
      </div>
    </div>
  );
}

export default SavedRecipes;
