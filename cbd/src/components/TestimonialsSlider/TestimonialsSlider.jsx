import React, { Component } from "react";
import Slider from "react-slick";
import rating from "../../images/testimonials/rating.png";
import "./testimonialsSlider.scss";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="testimonials-slider__arrow testimonials-slider__arrow_next" onClick={onClick}>
      <i className="icon-rightArrow"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="testimonials-slider__arrow testimonials-slider__arrow_prev" onClick={onClick}>    
      <i className="icon-leftArrow"></i>
    </div>
  );
}

class TestimonialsSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <div className="testimonials-slider">
        <Slider {...settings}>
          <div className="testimonials-slider__item">
            <div className="testimonials-slider__content">
              <div className="testimonials-slider__star-ratings">
                <img src={rating} alt="rating" className="testimonials-slider__rating-img" />
              </div>
              <blockquote className="testimonials-slider__revievs-holder">
                <p className="testimonials-slider__revievs">
                  I have tried another product after using this one successfully, and I am Back for good! The flavour, the lightness of the oil and the health benefits I have gotten with this oil are amazing!
                </p>
              </blockquote>
              <div className="testimonials-slider__author-name-holder">
                <span className="testimonials-slider__author-name">Mark J.</span>
              </div>
            </div>
          </div>
          <div className="testimonials-slider__item">
            <div className="testimonials-slider__content">
              <div className="testimonials-slider__star-ratings">
                <img src={rating} alt="rating" className="testimonials-slider__rating-img" />
              </div>
              <blockquote className="testimonials-slider__revievs-holder">
                <p className="testimonials-slider__revievs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis incidunt rem magni doloremque nesciunt sit veritatis laboriosam.
                </p>
              </blockquote>
              <div className="testimonials-slider__author-name-holder">
                <span className="testimonials-slider__author-name">Tony S.</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default TestimonialsSlider;