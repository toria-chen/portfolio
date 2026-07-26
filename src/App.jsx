import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Design from "./pages/Design";
import About from "./pages/About";
import RFCX from "./pages/RFCX";
import Bandit from "./pages/Bandit";
import Eco from "./pages/Eco";
import Housing from "./pages/Housing";
import ToTop from "./components/ToTop";

function App() {
  return (
    <Router>
      <ToTop />
      <Navbar />
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/design" element={<Design />} />
      <Route path="/about" element={<About />} />
      <Route path="/rfcx" element={<RFCX />} />
      <Route path="/bandit" element={<Bandit />} />
      <Route path="/eco" element={<Eco />} />
      <Route path="/housing" element={<Housing />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

