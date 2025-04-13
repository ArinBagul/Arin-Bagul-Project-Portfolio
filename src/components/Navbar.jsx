import React, { useState } from "react";
import "../style/navbar.css";

export default function Navbar({ onClickContact }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="primary-nav">
        <div className="nav--logo">
          <a href="#">
            <h2>
              Arin Bagul<span>.</span>
            </h2>
          </a>
        </div>
        <div className={`nav-btns ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-items">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#tech">Technology</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#blog">Blogs</a>
            </li>
          </ul>
          <button
            onClick={onClickContact}
            className="primary-btn"
            id="contact-btn"
          >
            Contact Me
          </button>
        </div>
        <div className="menu-toggle">
          <input
            hidden=""
            className="check-icon"
            id="check-icon"
            name="check-icon"
            type="checkbox"
            onClick={toggleMenu}
          />
          <label className="icon-menu" htmlFor="check-icon">
            <div className="bar bar--1"></div>
            <div className="bar bar--2"></div>
            <div className="bar bar--3"></div>
          </label>
        </div>
      </div>
    </nav>
  );
}
