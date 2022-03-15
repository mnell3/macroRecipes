import { Link } from "react-router-dom";

// Create list with the recipe titles and the recipe images
function RecipeList({ recipes }) {
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Recipes</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr>
              <td>
                <Link to={`/recipes/${recipe.id}`}>
                  <img
                    className="table-images"
                    src={recipe.image}
                    alt={recipe.title}
                  />
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
