import { Link } from "react-router-dom";

// Create list with the ingredients for the specified recipe
function RecipeList({ recipes }) {
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr>
              <td>
                <Link to={`/recipes/${recipe.id}`}>
                  <div className="recipe-titles"> {recipe.title}</div>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
