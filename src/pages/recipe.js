import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Set initial selected store to "kroger"
const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const [selectedStore, setSelectedStore] = useState("kroger");
  const { id } = useParams(); 

  // This code will run once when the page finishes loading
  // Get the recipe details with the recipe ID
  useEffect(() => {
    fetch(`http://localhost:3000/recipes/${id}`)
      .then((resp) => resp.json())
      .then((respJSON) => {
        const recipe = respJSON;
        setRecipe(recipe);
      });
  }, []);

  // Use selected store and ingredient name to generate link to purchase the ingredient
  // at the selected store 
  const onIngredientClick = (ingredientName) => {
    fetch(
      `https://cs-361-product-search.herokuapp.com/?source=${selectedStore}&item=${ingredientName}`
    )
      .then((resp) => resp.json())
      .then((respJSON) => {
        const newURL = respJSON.link;
        window.open(newURL); // open new tab with new url
      });
  };

  // Display a drop down menu of stores to purchase an ingredient from. Display each ingredient with a button
  // and the amount needed. When a recipe button is clicked, call onIngredientClick to open selected 
  // store and ingredient in a new tab. Display steps. 
  return (
    <div class="container">
      <h1 className="nav-links">{recipe.title}</h1>
      <div class="recipe-list">
        <h2 className="ingredient-heading">Ingredients</h2>

        
        <h4 className="ingredient-subheading">
          Select a store to purchase from:&nbsp;
          <select
            className="ingredient-button"
            value={selectedStore}
            onChange={(event) => setSelectedStore(event.target.value)}
          >
            <option value="kroger">Kroger</option>
            <option value="target">Target</option>
            <option value="walmart">Walmart</option>
            <option value="amazon">Amazon</option>
            <option value="costco">Costco</option>
            <option value="albertsons">Albertsons</option>
          </select>
        </h4>


        <h4 className="ingredient-subheading">
          Then select an ingredient to view at that store
        </h4>
        {recipe.ingredients?.map((ingredient) => (
          <p>
            <button
              size="xs"
              class="ingredient-button"
              onClick={() => onIngredientClick(ingredient.name)}
            >
              {ingredient.name}{" "}
            </button>{" "}
            {ingredient.amount} {ingredient.unit}{" "}
          </p>
        ))}
      </div>

    
      <div className="recipe-steps">
        <h2 className="ingredient-heading">Steps</h2>
        <ol>
          {recipe.steps?.map((step) => (
            <li>{step.text}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Recipe;
