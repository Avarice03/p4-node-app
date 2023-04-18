import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import backImg from "../images/back.png";
import { RecipeContext } from "../providers/RecipeProvider";
import { v4 as uuid } from "uuid";

 // Recipe Form page for RecipeEZ
function RecipeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipes, setRecipes] = useContext(RecipeContext);
  // Get the recipe that will be edited
  const editedRecipe = recipes.find((recipe) => recipe.id === id);
  const [name, setName] = useState(editedRecipe?.name || "");
  const [category, setCategory] = useState(editedRecipe?.category || "");
  const [servings, setServings] = useState(editedRecipe?.servings || "");
  const [cuisine, setCuisine] = useState(editedRecipe?.cuisine || "");
  const [description, setDescription] = useState(
    editedRecipe?.description || ""
  );
  const [notes, setNotes] = useState(editedRecipe?.notes || "");
  const [image, setImage] = useState(editedRecipe?.image || "");

  // Join each ingredient and instruction array item into a single string separated with a slash (/) to display in their textarea
   // Note: used slash instead of comma since some ingredients and instructions use comma
  const [ingredientsCopy, setIngredientsCopy] = useState(
    editedRecipe?.ingredients.join("/") || ""
  );
  const [instructionsCopy, setInstructionsCopy] = useState(
    editedRecipe?.instructions.join("/") || ""
  );

  // Function for handling change in input
  const handleChange = (e) => {
    const inputField = e.target.name;
    switch (inputField) {
      case "name":
        setName(e.target.value);
        break;
      case "category":
        setCategory(e.target.value);
        break;
      case "servings":
        setServings(e.target.value);
        break;
      case "cuisine":
        setCuisine(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "notes":
        setNotes(e.target.value);
        break;
      case "image":
        setImage(e.target.value);
        break;
      case "ingredients":
        setIngredientsCopy(e.target.value);
        break;
      case "instructions":
        setInstructionsCopy(e.target.value);
        break;
      default: 
        break;
    }
  };

  // Function to split the ingredients and instructions separated by a slash into an array
  const ingredients = ingredientsCopy.split("/");
  const instructions = instructionsCopy.split("/");

  // Function for saving changes and adding the edited or added item to the recipes array
  const saveChanges = (id, recipe) => {
    const indexOfRecipe = recipes.findIndex((recipe) => recipe.id === id);
    const recipeCopy = [...recipes];
    recipeCopy.splice(indexOfRecipe, 1, recipe);
    setRecipes(recipeCopy);
    navigate(`/recipe/${id}`);
  };

  // Function for adding new recipes
  const addRecipe = (newRecipe) => {
    const recipe = [...recipes, newRecipe];
    setRecipes(recipe);
    navigate(`/recipes`);
  };

  // Function to compile changes based on the data input by the user
  const handleEdit = () => {
    const id = editedRecipe ? editedRecipe.id : uuid();
    const newRecipe = {
      id,
      name,
      category,
      servings,
      cuisine,
      description,
      notes,
      image,
      ingredients,
      instructions,
    };
    if (editedRecipe) {
      saveChanges(id, newRecipe);
    } else {
      addRecipe(newRecipe);
    }
    console.log(recipes);
    setName("");
    setCategory("");
    setServings("");
    setCuisine("");
    setDescription("");
    setNotes("");
    setImage("");
    setIngredientsCopy("");
    setInstructionsCopy("");
  };

  return (
    <div className="recipeForm-container">
      <div className="recipeForm-header">
        <span className="back-btn-span"></span>
        <span>
          <h1>{editedRecipe ? "Edit Recipe" : "Add Recipe"}</h1>
        </span>
        <span>
          <img
            src={backImg}
            className="back-btn-img"
            alt="icon of back"
            style={{ border: "none", cursor: "pointer" }}
            onClick={() => {
              editedRecipe ? navigate(`/recipe/${id}`) : navigate("/recipes");
            }}
          ></img>
        </span>
      </div>
      <div className="input-container">
        <div className="input-fields">
          <label className="form-label">Recipe Name</label>
          <input
            name="name"
            className="form-control"
            placeholder="Recipe Name"
            type="text"
            value={name}
            onChange={handleChange}
          />
          <label className="form-label">Category:</label>
          <input
            name="category"
            className="form-control"
            placeholder="Category"
            type="text"
            value={category}
            onChange={handleChange}
          />
          <label className="form-label">Servings:</label>
          <input
            name="servings"
            className="form-control"
            placeholder="Servings"
            type="number"
            value={servings}
            onChange={handleChange}
          />
          <label className="form-label">Cuisine:</label>
          <input
            name="cuisine"
            className="form-control"
            placeholder="Cuisine"
            type="text"
            value={cuisine}
            onChange={handleChange}
          />
          <label className="form-label">Description:</label>
          <input
            name="description"
            className="form-control"
            placeholder="Description"
            type="text"
            value={description}
            onChange={handleChange}
          />
          <label className="form-label">Notes:</label>
          <input
            name="notes"
            className="form-control"
            placeholder="Notes"
            type="text"
            value={notes}
            onChange={handleChange}
          />
          <label className="form-label">Image Address:</label>
          <input
            name="image"
            className="form-control"
            placeholder="https://images.com/recipe/beef"
            type="text"
            value={image}
            onChange={handleChange}
          />
          <label className="form-label">Ingredients:</label>
          <textarea
            name="ingredients"
            className="form-control"
            rows="3"
            placeholder="Ingredients separated by slash ( / )"
            value={ingredientsCopy}
            onChange={handleChange}
          ></textarea>
          <p className="text-muted">
            Please separate each ingredient by a slash ("/").
          </p>
          <label className="form-label">Instructions:</label>
          <textarea
            name="instructions"
            className="form-control"
            rows="3"
            placeholder="Instructions separated by slash ( / )"
            value={instructionsCopy}
            onChange={handleChange}
          ></textarea>
          <p className="text-muted">
            Please separate each instruction by a slash ("/").
          </p>
        </div>
        <button
          className="btn btn-danger"
          style={{ margin: "1em 0" }}
          onClick={handleEdit}
        >
          {editedRecipe ? "Edit Recipe" : "Add Recipe"}
        </button>
      </div>
    </div>
  );
}

export default RecipeForm;
