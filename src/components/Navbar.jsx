import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Portfolio</h2>

      <ul className={menu ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      <div className="menu-icon" onClick={handleMenu}>
        {menu ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;