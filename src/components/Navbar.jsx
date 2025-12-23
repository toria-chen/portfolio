import logo from "../assets/vclogo2.png";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
  <div className="navbar-row">
    <div className="logo">
      <a href="/"><img src={logo} alt="Logo" /></a>
    </div>

    <ul className="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/product">Product</a></li>
      <li><a href="/design">Design</a></li>
      <li><a href="/about">About</a></li>
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
      <li><a href="/">Home</a></li>
      <li><a href="/product">Product</a></li>
      <li><a href="/design">Design</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  )}
</nav>
  );
}

export default Navbar;



