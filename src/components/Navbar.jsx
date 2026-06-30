import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">
  Portfolio 
</h2>

      <div
        className="hamburger"
        onClick={() => setMenu(!menu)}
      >
        {menu ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menu ? "nav-menu active" : "nav-menu"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;