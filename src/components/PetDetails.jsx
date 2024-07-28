// src/components/PetDetails.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPetById } from "../services/api";

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPetDetails = async () => {
      try {
        const response = await fetchPetById(id);
        if (response.pets && response.pets.length > 0) {
          setPet(response.pets[0]);
        } else {
          setError("Pet not found.");
        }
      } catch (err) {
        setError("Failed to fetch pet details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getPetDetails();
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
      <h1 className="text-4xl font-bold text-center mb-4">{pet.name}</h1>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <img
          src={pet.images[0]}
          alt={pet.name}
          className="w-full max-w-md mx-auto h-64 object-cover mb-4 rounded-t"
        />
        <div className="text-center text-lg">
          <p className="font-semibold mb-2">
            <span className="font-bold">Name:</span> {pet.name}
          </p>
          <p className="font-semibold mb-2">
            <span className="font-bold">Location:</span> {pet.city}, {pet.state}
          </p>
          <p className="font-semibold mb-2">
            <span className="font-bold">Breed:</span> {pet.breed}
          </p>
          <p className="font-semibold mb-2">
            <span className="font-bold">Description:</span> {pet.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
