import axios from "axios";

const BASE_URL = "http://localhost:3069/v1/recipes";

export const getPublicRecipes = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const getPublicAndUserRecipes = async () => {
  const { data } = await axios.get(`${BASE_URL}/user`);
  return data;
};

export const getUserRecipes = async () => {
  const { data } = await axios.get(`${BASE_URL}/user/personal`);
  return data;
};

export const addUser = async (user) => {
  const response = await axios.post("http://localhost:3069/v1/signup", user);
  return response;
};

export const loginUser = async (user) => {
  const response = await axios.post("http://localhost:3069/v1/login", user);
  return response;
};

export const getUserDetails = async () => {
  const { data } = await axios.get("http://localhost:3069/v1/user");
  return data;
};

export const updateUserDetails = async (userDetails) => {
  const response = await axios.put("http://localhost:3069/v1/user", userDetails);
  return response;
};
