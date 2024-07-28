// src/services/api.js
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchPets = async (page = 1) => {
  const response = await axios.get(`${API_URL}/pets?page=${page}`);
  return response.data;
};

export const fetchAnimals = async () => {
  const response = await axios.get(`${API_URL}/animals`);
  return response.data;
};

export const fetchPetById = async (id) => {
  const response = await axios.get(`${API_URL}/pets?id=${id}`);
  return response.data;
};

export const fetchBreeds = async (animal) => {
  const response = await axios.get(`${API_URL}/breeds?animal=${animal}`);
  return response.data;
};

export const searchPets = async (animal, location, breed) => {
  let url = `${API_URL}/pets?`;
  if (animal) url += `animal=${animal}&`;
  if (location) url += `location=${location}&`;
  if (breed) url += `breed=${breed}`;

  const response = await axios.get(url);
  return response.data;
};

export const fetchRandomPets = async (limit = 6) => {
  const response = await axios.get(`${API_URL}/pets`);
  const pets = response.data.pets.slice(0, limit);
  return pets;
};
