// src/components/PetDetails.jsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchPetById } from "../services/api";

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPet = async () => {
      try {
        const response = await fetchPetById(id);
        setPet(response.data.pets[0]);
      } catch (err) {
        setError("Failed to fetch pet details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getPet();
  }, [id]);

  if (loading) {
    return <div className="text-center my-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 my-4">{error}</div>;
  }

  if (!pet) {
    return <div className="text-center my-4">Pet not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-4 rounded shadow-lg">
        <img
          src={pet.photos[0]?.medium}
          alt={pet.name}
          className="w-full h-64 object-cover mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{pet.name}</h1>
        <p className="text-xl mb-4">{pet.breed}</p>
        <p className="text-gray-700">{pet.description}</p>
      </div>
    </div>
  );
};

export default PetDetails;
