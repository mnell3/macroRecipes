import { Link } from "react-router-dom";

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
