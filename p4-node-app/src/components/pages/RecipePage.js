import React, { useContext } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { RecipeContext } from "../providers/RecipeProvider";
import backImg from "../images/back.png";
import { UserContext } from "../providers/User";
import imagePlaceholder from "../images/photo.png";

 // Recipe page for RecipeEZ
function RecipePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipes,] = useContext(RecipeContext);
  const [admin,] = useContext(UserContext);
  // Data of the recipe clicked based on its id
  const currentRecipe = recipes.filter((recipe) => recipe._id === id);
  // Remove the object from array
  const recipe = currentRecipe.shift();

  return (
    <div className="recipePage-container">
      <div className="column-containers">
        <div className="left-column">
          <h1>{recipe.name}</h1>
          <div className="recipe-content">
            <p className="badge rounded-pill text-bg-danger">
              {recipe.category}
            </p>
            <p>Servings: {recipe.servings}</p>
            <p>Cuisine: {recipe.cuisine}</p>
            <p>{recipe.description}</p>
          </div>
          <div className="recipe-ingredients">
            <h2>Ingredients:</h2>
            <ul>
              {recipe.ingredients.map((ingredients) => {
                return <li>{ingredients}</li>;
              })}
            </ul>
          </div>
          <div className="recipe-notes">
            <h2>Notes:</h2>
            <p>{recipe.notes}</p>
          </div>
        </div>
        <div className="right-column">
          <div className="back-btn">
            <div className="edit-btn">
              {admin ?
              <button className="btn btn-secondary" onClick={() => navigate(`/recipe/${id}/edit`)}>Edit</button> : ""}
            </div>
            <NavLink to="/recipes">
              <img
                src={backImg}
                width="30"
                alt="icon of back"
                style={{ border: "none" }}
              ></img>
            </NavLink>
          </div>
          <div className="recipe-image">
            <img src={recipe.image !== "" ? recipe.image : imagePlaceholder} alt="placeholder"/>
          </div>
          <div className="recipe-instructions">
            <h2>Instructions:</h2>
            <ol>
              {recipe.instructions.map((instructions) => {
                return <li>{instructions}</li>;
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
