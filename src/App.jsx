import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

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
    <Router>
      <Navbar />
      
      <Routes>
        <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Link to="/design">Design</Link>
      <Link to="/about">About</Link>
      <Link to="/t4sg">T4SG</Link>
      <Link to="/busyb">BusyB</Link>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

