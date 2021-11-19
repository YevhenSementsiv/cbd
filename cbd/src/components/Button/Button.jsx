import React from "react";

const Button = ({blockName, text}) => (
  <button type="button" className={`${blockName}__button`}>
    <span className={`${blockName}__button-text`}>{text}</span>
  </button>
);

export default Button;