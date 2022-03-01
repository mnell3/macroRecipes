import React, { useEffect, useState } from "react";
import "../App.css";
import RecipeList from "../components/recipe-list";
import { Link } from "react-router-dom"; //

function Macro3() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/recipes?macro_like=fat-loss")
      .then((resp) => resp.json())
      .then((respJSON) => {
        setRecipes(respJSON);
      });
  }, []);

  return (
    <div>
      <h3 className="nav-links"> Macro 3: Fat Loss</h3>
      <div className="back-links">
        <RecipeList recipes={recipes} />
        {/* <Link to="/savedrecipes">View Saved Recipes</Link> */}
        <Link to="/">Home Page</Link>
      </div>
    </div>
  );
}

export default Macro3;
