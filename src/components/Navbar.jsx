import logo from "../assets/vclogo2.webp";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && open) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  return (
    <nav className="navbar">
      <div className="navbar-row">
        <div className="logo">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/casestudies">Case Studies</Link></li>
          <li><Link to="/design">Visual Design</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li>
            <a  href="https://drive.google.com/file/d/1eju-nxiTRaRhZURQy0B-LE3d0OkLjA3x/view?usp=sharing"
            target="_blank" rel="noopener noreferrer" >
            Resumé
            </a>
  </li>
        </ul>

        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <ul className="mobile-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/casestudies">Case Studies</Link></li>
          <li><Link to="/design">Visual Design</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;



