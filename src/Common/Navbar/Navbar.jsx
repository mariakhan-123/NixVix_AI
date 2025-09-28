import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./Navbar.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Desktop Nav */}
      <nav className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/services" className="nav-link">
          Services
        </NavLink>
        <NavLink to="/techstack" className="nav-link">
          Tech Stack
        </NavLink>
        <NavLink to="/solutions" className="nav-link">
          Solutions
        </NavLink>
      </nav>
      <Link to="/contact-us">
      <div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            mass: 1,
            stiffness: 300,
            damping: 20,
          }}
          className="talk-btn"
        >
          Let’s Talk AI
        </motion.button>
      </div>
      </Link>
      {/* Hamburger Icon */}
      <FontAwesomeIcon
        icon={isOpen ? faTimes : faBars} // switch between bars & close
        size="1x"
        className="hamburger-icon"
        onClick={toggleMenu}
      />

      {/* Dropdown Menu */}
      <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
        <NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink
          to="/services"
          className="nav-link"
          onClick={() => setIsOpen(false)}
        >
          Services
        </NavLink>
        <NavLink
          to="/techstack"
          className="nav-link"
          onClick={() => setIsOpen(false)}
        >
          Tech Stack
        </NavLink>
        <NavLink
          to="/solutions"
          className="nav-link"
          onClick={() => setIsOpen(false)}
        >
          Solutions
        </NavLink>
        <div className="dropdown-btn-wrapper">
        <NavLink className="nav-link" onClick={() => setIsOpen(false)}>
          <Link to="/contact-us">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              mass: 1,
              stiffness: 300,
              damping: 20,
            }}
            className="talk-btn"
          >
            Let’s Talk AI
          </motion.button></Link>
        </NavLink></div>
      </div>
    </header>
  );
}
