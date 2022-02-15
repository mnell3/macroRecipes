import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import img1 from "../images/chicken_veggies.jpg";
import img2 from "../images/shrimp_scampi.jpg";

const RecipeList = () => {
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Recipe</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="recipe-titles">Chicken and Veggie Soup</div>{" "}
              <img
                className="table-images"
                src={img1}
                alt="Chicken and Veggie Soup"
              />
            </td>
            <td>
              <div className="descriptions">
                {" "}
                Chicken soup with potatoes, carrots, and...{" "}
              </div>
              <Link to="/recipe_details">Click here to view</Link>
              <div>
                <button className="save-recipe-button">Save Recipe</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="recipe-titles">Shrimp Scampi</div>{" "}
              <img className="table-images" src={img2} alt="Shrimp Scampi" />
            </td>
            <td>
              <div className="descriptions"> Shrimp scampi with... </div>
              <Link to="/recipe_details">Click here to view</Link>
              <div>
                <button className="save-recipe-button">Saved Recipe</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

function Macro3() {
  return (
    <div>
      <h3 className="nav-links"> Macro 3: Maintenance</h3>
      <div className="back-links">
        {RecipeList()}
        <Link to="/savedrecipes">View Saved Recipes</Link>
        <Link to="/">Select a different macro ratios</Link>
      </div>
    </div>
  );
}

export default Macro3;
