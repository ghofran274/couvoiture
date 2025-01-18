import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signin from "./pages/signin";
import Login from "./pages/login";
import Accueill from "./pages/accueill/accueil";
import Inscrire from "./pages/inscrire";

const App = () => {
  return (
    <div>
      <Navbar /> {/* Navbar should always be visible */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/accueill" element={<Accueill />} />
        <Route path="/inscrire" element={<Inscrire />} />
      </Routes>
    </div>
  );
};

export default App;
