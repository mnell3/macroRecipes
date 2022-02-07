import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const RecipeList = () => {
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Recipe</th>
            <th>Description</th>
            <th>View Recipe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chicken and Veggies</td>
            <td>Super yummy recipe...</td>
            <td> {<button>Click here to view</button>} </td>
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
