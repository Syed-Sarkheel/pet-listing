import { useState, useEffect } from "react";
import { searchPets, fetchAnimals, fetchBreeds } from "../services/api";
import PetList from "../components/PetList";

const SearchForm = () => {
  const [animals, setAnimals] = useState([]);
  const [animal, setAnimal] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [breed, setBreed] = useState("");
  const [location, setLocation] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAnimals = async () => {
      try {
        const data = await fetchAnimals();
        setAnimals(data.animals);
      } catch (err) {
        console.error("Failed to fetch animals:", err);
      }
    };

    getAnimals();
  }, []);

  useEffect(() => {
    const getBreeds = async () => {
      if (animal) {
        try {
          const data = await fetchBreeds(animal);
          setBreeds(data.breeds);
        } catch (err) {
          console.error("Failed to fetch breeds:", err);
        }
      } else {
        setBreeds([]);
      }
    };

    getBreeds();
  }, [animal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await searchPets(animal, location, breed);
      setSearchResults(response.pets);
    } catch (err) {
      setError("Failed to fetch pets. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Search for Pets</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="animal"
          >
            Animal
          </label>
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select an animal</option>
            {animals.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="breed"
          >
            Breed
          </label>
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            disabled={!animal}
          >
            <option value="">Select a breed</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </form>

      {loading && <div className="text-center my-4">Loading...</div>}
      {error && <div className="text-center text-red-500 my-4">{error}</div>}
      {searchResults.length > 0 && <PetList pets={searchResults} />}
    </div>
  );
};

export default SearchForm;
