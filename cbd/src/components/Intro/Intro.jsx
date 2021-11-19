import React from "react";
import Button from "../Button/Button";
import "./intro.scss";

const Intro = () => (
  <section className="intro" id="intro">
    <div className="container">
      <div className="intro__content">
        <h1 className="intro__title">Enhancing Life <br /> Excelling in Care</h1>
        <h2 className="intro__subtitle">Choose Wisely. Choose CBD</h2>
        <Button blockName="intro" text="Start Shopping" />
        <a href="#products" className="intro__link">
          <span className="intro__link-text">See all products</span>
          <span className="intro__link-icon">
            <i className="icon-rightArrow"></i>
          </span>
        </a>
        <a href="#about" className="intro__scroll-link">
          <i className="icon-downArrow"></i>
        </a>
      </div>
    </div>
    <div className="intro__slogan-holder">
      <h3 className="intro__slogan">CBD Potion health</h3>
    </div>
  </section>
);

export default Intro;