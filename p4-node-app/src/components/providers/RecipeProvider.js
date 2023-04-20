import { createContext, useEffect, useState } from "react";
import { getRecipes } from "../services/RecipesService";

export const RecipeContext = createContext();

// Provider for Recipes array
export const RecipeProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchRecipes = async() => {
      const data = await getRecipes();
      setRecipes(data);
    };
    fetchRecipes();
  }, []);

  return (
    <RecipeContext.Provider value={[recipes, setRecipes]}>
      {props.children}
    </RecipeContext.Provider>
  );
};

const recipeExport = { RecipeContext, RecipeProvider }
export default recipeExport;
