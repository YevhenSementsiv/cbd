import React from "react";
import './navigation.scss'

const Navigation = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__list-item">
        <a href="#intro" className="nav__link">Home</a>
      </li>
      <li className="nav__list-item">
        <a href="#products" className="nav__link">Products</a>
      </li>
      <li className="nav__list-item">
        <a href="#faqs" className="nav__link">FAQs</a>
      </li>
      <li className="nav__list-item">
        <a href="#footer" className="nav__link">Contact Us</a>
      </li>
    </ul>
  </nav>
);

export default Navigation;