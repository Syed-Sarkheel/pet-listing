// src/services/api.js
import axios from "axios";

const API_URL = "http://pets-v2.dev-apis.com";

export const fetchPets = async (page = 1) => {
  const response = await axios.get(`${API_URL}/pets?page=${page}`);
  return response.data;
};

export const fetchPetById = async (id) => {
  const response = await axios.get(`${API_URL}/pets?id=${id}`);
  return response.data;
};
export const searchPets = (animal, location, breed) =>
  axios.get(`${API_URL}/pets`, {
    params: { animal, location, breed },
  });

export const fetchRandomPets = async (limit = 6) => {
  const response = await axios.get(`${API_URL}/pets`);
  const pets = response.data.pets.slice(0, limit);
  return pets;
};
