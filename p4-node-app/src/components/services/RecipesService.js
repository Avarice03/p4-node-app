import axios from "axios";

const BASE_URL = "http://localhost:3069/v1/recipes";

export const getRecipes = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const addUser = async(user) => {
  const response = await axios.post("http://localhost:3069/v1/signup", user);
  return response;
}