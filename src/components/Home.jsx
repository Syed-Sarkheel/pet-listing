// src/components/Home.jsx
import { useState, useEffect } from "react";
import { fetchRandomPets } from "../services/api";

const Home = () => {
  const [randomPets, setRandomPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRandomPets = async () => {
      try {
        const pets = await fetchRandomPets();
        setRandomPets(pets);
      } catch (err) {
        setError("Failed to fetch pet images. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getRandomPets();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to Pet Listings</h1>
        <p className="text-lg text-gray-700 mt-2">
          Find your perfect pet companion
        </p>
      </header>

      {loading && <div className="text-center my-4">Loading...</div>}
      {error && <div className="text-center text-red-500 my-4">{error}</div>}

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Pets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {randomPets.map((pet) => (
            <div key={pet.id} className="p-4 border rounded shadow-lg">
              <img
                src={pet.images[0]}
                alt={pet.name}
                className="w-full h-48 object-cover mb-4 rounded-t"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{pet.name}</h3>
                <p className="text-gray-600">{pet.breed}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-4 border rounded shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Wide Variety of Pets</h3>
            <p className="text-gray-700">
              We offer a diverse selection of pets to suit every preference and
              lifestyle.
            </p>
          </div>
          <div className="p-4 border rounded shadow-lg">
            <h3 className="text-2xl font-bold mb-2">
              Detailed Pet Information
            </h3>
            <p className="text-gray-700">
              Get comprehensive information about each pet to make an informed
              decision.
            </p>
          </div>
          <div className="p-4 border rounded shadow-lg">
            <h3 className="text-2xl font-bold mb-2">User-Friendly Interface</h3>
            <p className="text-gray-700">
              Our website is designed to be easy to navigate and use, providing
              a seamless experience.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center mt-8">
        <p className="text-gray-700">
          &copy; 2024 Pet Listings. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
