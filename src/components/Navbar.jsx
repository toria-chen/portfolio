import logo from "../assets/vclogo2.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
  <div className="navbar-row">
    <div className="logo">
      <Link to="/"><img src={logo} alt="Logo" /></Link>
    </div>

    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/product">Product</Link></li>
      <li><Link to="/design">Design</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>

    <button
      className="hamburger"
      onClick={() => setOpen(!open)}
      aria-label="Toggle navigation"
    >
      <span />
      <span />
      <span />
    </button>
  </div>

  {open && (
    <ul className="mobile-menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/product">Product</Link></li>
      <li><Link to="/design">Design</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  )}
</nav>
  );
}

export default Navbar;



