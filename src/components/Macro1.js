import React from "react";
import "../App.css";
import img1 from "../images/chicken_veggies.jpg";
import img2 from "../images/shrimp_scampi.jpg";
import { Link } from "react-router-dom"; // makes sure page isn't reloaded which would happen with href

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
                alt="Chicken and Veggie Soup"
              />
            </td>
            <td>
              <div className="descriptions">
                {" "}
                Chicken soup with potatoes, carrots, and...{" "}
              </div>
              <a href="https://www.archanaskitchen.com/healthy-creamy-chicken-soup-with-vegetables-recipe">
                Click here to view{" "}
              </a>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <img className="table-images" src={img2} alt="Shrimp Scampi" />
            </td>
            <td>
              <div className="descriptions"> Shrimp scampi with... </div>
              <a href="https://www.thespruceeats.com/classic-shrimp-scampi-1300772">
                Click here to view{" "}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

function Macro1() {
  return (
    <div>
      <h3 className="nav-links"> Macro 1: Body Building</h3>
      <div className="back-links">
        {RecipeList()}
        {/* <Link to="/savedrecipes">View Saved Recipes</Link> */}
        <Link to="/">Home Page</Link>
      </div>
    </div>
  );
}

export default Macro1;
