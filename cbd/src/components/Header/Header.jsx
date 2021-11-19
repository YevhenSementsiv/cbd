import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import UserBox from "../UserBox/UserBox";
import "./header.scss";

const Header = () => (
  <header className="header">
    <Navigation />
    <Logo blockName="header" />
    <UserBox />
  </header>
);

export default Header;