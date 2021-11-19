import React from "react";
import "./userBox.scss";

const UserBox = () => (
  <div className="userbox">
    <ul className="userbox__list">
      <li className="userbox__list-item">
        <a href="#" className="userbox__link">login</a>
      </li>
      <li className="userbox__list-item">
        <a href="#" className="userbox__link">
          <span className="userbox__icon-holder">
            <i className="icon-search"></i>
          </span>
          <span className="userbox__link-text">Search</span>
        </a>
      </li>
      <li className="userbox__list-item">
        <a href="#" className="userbox__link">Cart (0)</a>
      </li>
    </ul>
  </div>
);

export default UserBox;