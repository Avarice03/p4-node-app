import React, { useCallback, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FilterCategory from "../FilterCategory";
import { RecipeContext } from "../providers/RecipeProvider";
import RecipeButton from "../RecipeButton";
import axios from "axios";
import { UserContext } from "../providers/User";
import spinner from "../images/loading.gif";

// Recipes Home page for RecipeEZ
function Recipes() {
  const [recipes] = useContext(RecipeContext);
  const [isLoggedIn] = useContext(UserContext);
  const navigate = useNavigate();
  const [recipesCopy, setRecipesCopy] = useState(recipes);
  const [category, setCategory] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [word, searchWord] = useState("");
  const [personal, setPersonal] = useState(false);
  const query = new URLSearchParams(useLocation().search);
  let categoryQuery = query.get("category");
  let cuisineQuery = query.get("cuisine");
  const BASE_URL = "https://recipeez-api.onrender.com";
  // const BASE_URL = "http://localhost:3069";
  // const token = localStorage.getItem("token-auth");
  // console.log(isLoggedIn);
  useEffect(() => {
    const fetch = async () => {
      try {
        if (isLoggedIn) {
          if (!personal) {
            const { data } = await axios.get(
              `${BASE_URL}/v1/recipes/user?category=${categoryQuery}&cuisine=${cuisineQuery}`
            );
            setRecipesCopy(data);
          } else {
            const { data } = await axios.get(
              `${BASE_URL}/v1/recipes/user/personal?category=${categoryQuery}&cuisine=${cuisineQuery}`
            );
            setRecipesCopy(data);
          }
        } else {
          const { data } = await axios.get(
            `${BASE_URL}/v1/recipes?category=${categoryQuery}&cuisine=${cuisineQuery}`
          );
          setRecipesCopy(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [categoryQuery, cuisineQuery, isLoggedIn, recipes, personal]);

  if (categoryQuery === null) {
    categoryQuery = "";
  }
  if (cuisineQuery === null) {
    cuisineQuery = "";
  }

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
  const filterCategory = useCallback((category, cuisine) => {
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
  }, []);

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
    filterCategory("", "");
    const searchedWord = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(word.toLowerCase())
    );
    setRecipesCopy(searchedWord);
  };

  if (!recipes) {
    return (
      <img src={spinner} className="loading-image" alt="cooking cat gif" />
    );
  }

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
          {isLoggedIn ? (
            <button
              className="btn btn-secondary"
              onClick={() => navigate(`/recipe/add-recipe`)}
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
      {isLoggedIn ? (
        <div>
          <input
            type="checkbox"
            className="btn-check"
            id="btncheck"
            onClick={() => setPersonal(!personal)}
          ></input>
          <label className="btn btn-outline-danger" htmlFor="btncheck">
            Show Personal Recipes
          </label>
        </div>
      ) : (
        ""
      )}
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
          />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
