import React from "react";
import imagePlaceholder from "./images/photo.png";

function RecipeButton({ id, image, name, handleDelete, showRecipe }) {

  return (
    <>
      <div className="recipe-card">
        <h4>{name}</h4>
        {/* {admin ? (
          <>
            <button
              type="button"
              className="btn-close"
              style={{ display: "flex", alignSelf: "flex-end" }}
              onClick={() => handleDelete(id)}
            ></button>
          </>
        ) : (
          ""
        )} */}
        <button className="recipeButton" onClick={() => showRecipe(id)}>
          <img className="recipeButtonImg"
            key={id}
            src={image !=="" ? image: imagePlaceholder}
            alt="recipe thumbnail"
          />
        </button>
      </div>
    </>
  );
}

export default RecipeButton;
