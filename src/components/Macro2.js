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
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {" "}
              <img
                className="table-images"
                src={img1}
                alt="Image of Chicken and Veggie Soup"
              />
            </td>
            <td>
              <div className="descriptions">
                {" "}
                Chicken soup with potatoes, carrots, and...{" "}
              </div>
              <Link to="/recipe_details">Click here to view</Link>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <img className="table-images" src={img2} alt="Shrimp Scampi" />
            </td>
            <td>
              <div className="descriptions"> Shrimp scampi with... </div>
              <Link to="/recipe_details">Click here to view</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

function Macro2() {
  return (
    <div>
      <h3 className="nav-links"> Macro 2: Maintenance</h3>
      <div className="back-links">
        {RecipeList()}
        <Link to="/savedrecipes">View Saved Recipes</Link>
        <Link to="/">Go Back to Home Page</Link>
      </div>
    </div>
  );
}

export default Macro2;
