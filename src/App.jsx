// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AllPets from "./components/AllPets";
import PetDetails from "./components/PetDetails";
import SearchForm from "./components/SearchForm";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchForm />} />
          <Route path="/pets" element={<AllPets />} />
          <Route path="/pets/:id" element={<PetDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
