// src/components/AllPets.jsx
import { useState, useEffect } from "react";
import PetList from "./PetList";
import { fetchPets } from "../services/api";

const AllPets = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllPets = async () => {
    let allPets = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      try {
        const data = await fetchPets(page);
        allPets = [...allPets, ...data.pets];
        page += 1;
        hasMore = data.pets.length > 0;
      } catch (err) {
        setError("Failed to fetch pets. Please try again.");
        hasMore = false;
      }
    }

    setPets(allPets);
    setLoading(false);
  };

  useEffect(() => {
    getAllPets();
  }, []);

  if (loading) {
    return <div className="text-center my-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 my-4">{error}</div>;
  }

  return <PetList pets={pets} />;
};

export default AllPets;
