import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png"; 
import "./Navbar.css";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="navbar">
     
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

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
    </header>
  );
}
