import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Col, Row } from "react-bootstrap";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const [selectedStore, setSelectedStore] = useState("kroger");
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

  const onIngredientClick = (ingredientName) => {
    fetch(
      `https://cs-361-product-search.herokuapp.com/?source=${selectedStore}&item=${ingredientName}`
    )
      .then((resp) => resp.json())
      .then((respJSON) => {
        const newURL = respJSON.link;
        // window.location.href = newURL; // redirect the user to new page
        window.open(newURL); // open new tab with new url
      });
  };

  return (
    <Container>
      <h1>{recipe.title}</h1>
      <h2>Ingredients</h2>
      Select a store to purchase from:&nbsp;
      <select
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
      <h4>Select an ingredient below to purchase from a store near you</h4>
      {recipe.ingredients?.map((ingredient) => (
        <p>
          <button
            size="xs"
            class="btn btn-primary"
            onClick={() => onIngredientClick(ingredient.name)}
          >
            {ingredient.name}
          </button>
          {ingredient.amount},{ingredient.unit}
        </p>
      ))}
      <h2>Steps</h2>
      <ol>
        {recipe.steps?.map((step) => (
          <li>{step.text}</li>
        ))}
      </ol>
    </Container>
  );
};

export default Recipe;
