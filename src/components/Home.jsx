// src/components/Home.jsx
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to the Pet Listing Website
      </h1>
      <p className="text-lg mb-8">
        Find your perfect pet companion. Browse through a wide variety of pets
        or use the search functionality to find pets by specific criteria.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          to="/search"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search for Pets
        </Link>
        <Link
          to="/pets"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          View All Pets
        </Link>
      </div>
    </div>
  );
};

export default Home;
