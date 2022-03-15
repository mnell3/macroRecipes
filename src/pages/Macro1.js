import React, { useEffect, useState } from "react";
import "../App.css";
import RecipeList from "../components/recipe-list";
import { Link } from "react-router-dom"; 

function Macro1() {
  const [recipes, setRecipes] = useState([]);

  // get each recipe that has the macro "bodybuilding"
  useEffect(() => {
    fetch("http://localhost:3000/recipes?macro_like=bodybuilding")
      .then((resp) => resp.json())
      .then((respJSON) => {
        setRecipes(respJSON);
      });
  }, []);

  // Use the RecipeList component to display each recipe
  return (
    <div class="container">
      <h3 className="nav-links"> Macro 1: Bodybuilding</h3>
      <div className="back-links">
        <RecipeList recipes={recipes} />
        <Link to="/">Home Page</Link>
      </div>
    </div>
  );
}

export default Macro1;
