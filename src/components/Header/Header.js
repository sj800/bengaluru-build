

import "./Header.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">Bengaluru Builds</div>
        <nav className="header__nav desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <button
          className="header__menu-btn"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <span className="header__menu-icon" />
        </button>
        <div className={`header__mobile-menu${menuOpen ? " open" : ""}`}>
          <button
            className="header__close-btn"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <span className="header__close-icon" />
          </button>
          <nav className="header__mobile-nav">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
        {menuOpen && <div className="header__backdrop" onClick={() => setMenuOpen(false)} />}
      </div>
    </header>
  );
};

export default Header;
