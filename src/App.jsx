import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PetDetails from "./components/PetDetails";
import Home from "./pages/Home";
import SearchForm from "./pages/SearchForm";
import AllPets from "./pages/AllPets";

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
