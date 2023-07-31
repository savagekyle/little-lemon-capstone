import React, { useState } from "react";
import Logo from "../assets/images/Logo .svg";
import { Link } from "react-router-dom";
import Hamburger from "../assets/images/🦆 icon _hamburger menu.svg";

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="container">
      <Link to="/">
        <img src={Logo} alt="Little Lemon Logo" />
      </Link>

      <div
        className={`menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      >
        <img src={Hamburger} alt="Hamburger Menu" />
      </div>

      <ul className={`menu-items ${isMobileMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMobileMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" onClick={closeMobileMenu}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/booking" onClick={closeMobileMenu}>
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/order-online" onClick={closeMobileMenu}>
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={closeMobileMenu}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
