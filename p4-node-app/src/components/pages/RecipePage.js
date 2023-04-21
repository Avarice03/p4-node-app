import React, { useContext, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { RecipeContext } from "../providers/RecipeProvider";
import backImg from "../images/back.png";
import { UserContext } from "../providers/User";
import imagePlaceholder from "../images/photo.png";
import { UserDetailsContext } from "../providers/UserDetailsProvider";
import {
  deleteRecipe,
  getPublicAndUserRecipes,
} from "../services/RecipesService";

// Recipe page for RecipeEZ
function RecipePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipes, setRecipes] = useContext(RecipeContext);
  const [isLoggedIn] = useContext(UserContext);
  // Data of the recipe clicked based on its id
  const currentRecipe = recipes.filter((recipe) => recipe._id === id);
  // Remove the object from array
  const recipe = currentRecipe.shift();
  const [userDetails] = useContext(UserDetailsContext);
  const [responseMessage, setResponseMessage] = useState("");

  // Function for deleting recipes
  const handleDelete = async () => {
    try {
      const response = await deleteRecipe(id);
      setResponseMessage(response.data.message);
      const data = await getPublicAndUserRecipes();
      setRecipes(data);
      navigate("/recipes");
    } catch (error) {
      console.log(error);
      setResponseMessage(error.response.data.message);
    }
  };

  return (
    <>
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
                {isLoggedIn && userDetails.recipes.includes(id) ? (
                  <button
                    className="btn btn-outline-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                  >
                    Delete Recipe
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div className="edit-btn">
                {isLoggedIn && userDetails.recipes.includes(id) ? (
                  <button
                    className="btn btn-secondary"
                    onClick={() => navigate(`/recipe/${id}/edit-recipe`)}
                  >
                    Edit
                  </button>
                ) : (
                  ""
                )}
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
              <img
                src={recipe.image !== "" ? recipe.image : imagePlaceholder}
                alt="placeholder"
              />
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
      <div
        class="modal fade"
        id="deleteModal"
        tabindex="-1"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="deleteModalLabel">
                {`Are you sure you want to delete this recipe?`}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h2>{recipe.name}</h2>
            </div>
            <div class="modal-footer">
              <div>
                <p>{responseMessage}</p>
              </div>
              <div className="modal-buttons">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={handleDelete}
                >
                  Yes
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipePage;
