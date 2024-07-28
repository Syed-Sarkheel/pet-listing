// src/components/PetList.jsx
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
            <h2 className="text-xl font-semibold">{pet.name}</h2>
            <p>{pet.breed}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetList;
