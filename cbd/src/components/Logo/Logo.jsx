import React from "react";

const Logo = ({blockName}) => (
  <div className={`${blockName}__logo-holder`}>
    <a href="#" className={`${blockName}__logo-link`}>CBD</a>
  </div>
);

export default Logo;