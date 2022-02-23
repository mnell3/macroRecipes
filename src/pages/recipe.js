import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams(); // { id: 30 }

  // This code will run once when the page finishes loading
  useEffect(() => {
    fetch(`http://localhost:3000/recipes/${id}`)
      .then((resp) => resp.json())
      .then((respJSON) => {
        const recipe = respJSON;
        setRecipe(recipe);
      });
  }, []);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <small>{recipe.author}</small>
      <p>{recipe.steps}</p>
    </div>
  );
};

export default Recipe;
