// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Pet Listing</div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/search" className="text-gray-300 hover:text-white">
            Search
          </Link>
          <Link to="/pets" className="text-gray-300 hover:text-white">
            All Pets
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
