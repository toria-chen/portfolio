import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Design from "./pages/Design";
import About from "./pages/About";
import T4SG from "./pages/T4SG";
import Busy from "./components/Busy";

function App() {
  return (
    <Router basename="/design">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/design" element={<Design />} />
        <Route path="/about" element={<About />} />
        <Route path="/t4sg" element={<T4SG />} />
        <Route path="/busyb" element={<Busy />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

