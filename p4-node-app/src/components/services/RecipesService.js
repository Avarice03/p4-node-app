import axios from "axios";

const BASE_URL = "https://recipeez-api.onrender.com";

export const getPublicRecipes = async () => {
  const { data } = await axios.get(`${BASE_URL}/v1/recipes`);
  return data;
};

export const getPublicAndUserRecipes = async () => {
  const { data } = await axios.get(`${BASE_URL}/v1/recipes/user`);
  return data;
};

export const getUserRecipes = async () => {
  const { data } = await axios.get(`${BASE_URL}/v1/recipes/user/personal`);
  return data;
};

export const getUserDetails = async () => {
  const { data } = await axios.get(`${BASE_URL}/v1/user`);
  return data;
};

export const loginUser = async (user) => {
  const response = await axios.post(`${BASE_URL}/v1/login`, user);
  return response;
};

export const addUser = async (user) => {
  const response = await axios.post(`${BASE_URL}/v1/signup`, user);
  return response;
};

export const addRecipe = async (recipe) => {
  const response = await axios.post(`${BASE_URL}/v1/user`, recipe);
  return response;
}

export const updateUserDetails = async (userDetails) => {
  const response = await axios.put(`${BASE_URL}/v1/user`, userDetails);
  return response;
};

export const updateRecipe = async (recipeId, recipe) => {
  const response = await axios.put(`${BASE_URL}/v1/user/${recipeId}`, recipe);
  return response;
}

export const deleteUser = async () => {
  const response = await axios.delete(`${BASE_URL}/v1/user`);
  return response;
}

export const deleteRecipe = async (recipeId) => {
  const response = await axios.delete(`${BASE_URL}/v1/user/${recipeId}`);
  return response;
}

