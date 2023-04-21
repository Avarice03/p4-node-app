import { createContext, useContext, useEffect, useState } from "react";
import {
  getPublicAndUserRecipes,
  getPublicRecipes,
} from "../services/RecipesService";
import { UserContext } from "./User";

export const RecipeContext = createContext();

// Provider for Recipes array
export const RecipeProvider = (props) => {
  const [isLoggedIn] = useContext(UserContext);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (isLoggedIn) {
        const data = await getPublicAndUserRecipes();
        setRecipes(data);
      } else {
        const data = await getPublicRecipes();
        setRecipes(data);
      }
    };
    fetchRecipes();
  }, [isLoggedIn]);

  return (
    <RecipeContext.Provider value={[recipes, setRecipes]}>
      {props.children}
    </RecipeContext.Provider>
  );
};

const recipeExport = { RecipeContext, RecipeProvider };
export default recipeExport;
