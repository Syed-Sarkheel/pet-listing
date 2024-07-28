// src/components/PetList.jsx
import { Link } from "react-router-dom";

const PetList = ({ pets }) => {
  if (!pets || pets.length === 0) {
    return <div className="text-center my-4">No pets found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Pet List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pets.map((pet) => (
          <div key={pet.id} className="p-4 border rounded shadow-lg">
            <img
              src={pet.images[0]}
              alt={pet.name}
              className="w-full h-48 object-cover mb-4 rounded-t"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{pet.name}</h2>
              <p className="text-gray-600">{pet.breed}</p>
              <Link to={`/pets/${pet.id}`}>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetList;
