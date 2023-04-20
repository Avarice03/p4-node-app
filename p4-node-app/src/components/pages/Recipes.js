import React, { useCallback, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FilterCategory from "../FilterCategory";
import { RecipeContext } from "../providers/RecipeProvider";
import { UserContext } from "../providers/User";
import RecipeButton from "../RecipeButton";
import axios from "axios";

// Recipes Home page for RecipeEZ
function Recipes() {
  const [recipes, setRecipes] = useContext(RecipeContext);
  const [admin] = useContext(UserContext);
  const navigate = useNavigate();
  const [recipesCopy, setRecipesCopy] = useState(recipes);
  const [category, setCategory] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [word, searchWord] = useState("");
  const query = new URLSearchParams(useLocation().search);
  let categoryQuery = query.get("category");
  let cuisineQuery = query.get("cuisine");

  if (categoryQuery === null){
    categoryQuery = "";
  }
  if (cuisineQuery === null){
    cuisineQuery = "";
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3069/v1/recipes?category=${categoryQuery}&cuisine=${cuisineQuery}`
        );
        console.log("data", data);
        setRecipesCopy(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [categoryQuery, cuisineQuery]);

  // Push each category intro  an array
  const categories = recipes.reduce((categories, recipe) => {
    if (!categories.includes(recipe.category)) {
      categories.push(recipe.category);
    }
    return categories;
  }, []);

  // Push each cuisine intro  an array
  const cuisineCategories = recipes.reduce((cuisines, recipe) => {
    if (!cuisines.includes(recipe.cuisine)) {
      cuisines.push(recipe.cuisine);
    }
    return cuisines;
  }, []);

  // Function for filtering recipes based on category and cuisine
  const filterCategory = useCallback(
    (category, cuisine) => {
      setCategory(category);
      setCuisine(cuisine);

      // let selectedCategory;
      // if (category === "All" && cuisine === "All") {
      //   selectedCategory = recipes;
      // } else if (category !== "All" && cuisine === "All") {
      //   selectedCategory = recipes.filter(
      //     (recipe) => recipe.category === category
      //   );
      // } else if (category === "All" && cuisine !== "All") {
      //   selectedCategory = recipes.filter((recipe) => recipe.cuisine === cuisine);
      // } else if (category !== "All" && cuisine !== "All") {
      //   selectedCategory = recipes.filter(
      //     (recipe) => recipe.category === category && recipe.cuisine === cuisine
      //   );
      // }
      // setRecipesCopy(selectedCategory);
    },
    []
  );

  // Function for removing category tags
  const deleteCategory = () => {
    filterCategory("", cuisine);
    navigate(`/recipes?&cuisine=${cuisine}`);
  };

  // Function for removing cuisine tags
  const deleteCuisine = () => {
    filterCategory(category, "");
    navigate(`/recipes?category=${category}`);
  };

  // Function for searching recipe names
  const handleSearch = (e) => {
    e.preventDefault();
    const searchedWord = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(word.toLowerCase())
    );
    setRecipesCopy(searchedWord);
  };

  // Function for deleting recipe
  const handleDelete = (id) => {
    const currentRecipes = recipesCopy;
    const remainingRecipes = recipes.filter((recipe) => recipe.id !== id);
    const remainingCurrentRecipes = currentRecipes.filter(
      (recipe) => recipe.id !== id
    );
    setRecipes(remainingRecipes);
    setRecipesCopy(remainingCurrentRecipes);
  };

  // Function for navigating to the recipe page of recipe clicked
  const showRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="recipes-container">
      <div className="recipes-btn-container">
        <div className="filter-btn-grp">
          <div className="category-btn">
            <FilterCategory
              categories={categories}
              category={category}
              cuisine={cuisine}
              filterCategory={filterCategory}
              label={"Category"}
            />
          </div>
          <div className="cuisine-btn">
            <FilterCategory
              categories={cuisineCategories}
              category={category}
              cuisine={cuisine}
              filterCategory={filterCategory}
              label={"Cuisine"}
            />
          </div>
        </div>
        <div className="add-btn">
          {admin ? (
            <button
              className="btn btn-secondary"
              onClick={() => navigate(`/recipe/add`)}
            >
              Add Item
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="search-btn">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => searchWord(e.target.value)}
            />
            <button
              className="btn btn-outline-danger"
              type="submit"
              onClick={handleSearch}
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="filters-container">
        {category === "" ? (
          ""
        ) : (
          <button
            className="filter-btn btn btn-outline-danger"
            onClick={deleteCategory}
          >
            <span className="btn-close" style={{ opacity: "0" }}></span>
            {category}
            <span className="btn-close"></span>
          </button>
        )}
        {cuisine === "" ? (
          ""
        ) : (
          <button
            className="filter-btn btn btn-outline-danger"
            onClick={deleteCuisine}
          >
            <span className="btn-close" style={{ opacity: "0" }}></span>
            {cuisine}
            <span className="btn-close"></span>
          </button>
        )}
      </div>
      <div className="recipes-item-container">
        {recipesCopy.map((recipe) => (
          <RecipeButton
            key={recipe._id}
            id={recipe._id}
            name={recipe.name}
            image={recipe.image}
            handleDelete={handleDelete}
            showRecipe={showRecipe}
          />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
