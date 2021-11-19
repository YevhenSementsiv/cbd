import React, { Component } from "react";
import Slider from "react-slick";
import rating from "../../images/products/rating.png";
import bottle from "../../images/products/bottle.png";
import box from "../../images/products/box.png";
import coffee from "../../images/products/coffee.png";
import Button from "../Button/Button";
import "./productSlider.scss";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="products-slider__arrow products-slider__arrow_next" onClick={onClick}>
      <i className="icon-rightArrow"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="products-slider__arrow products-slider__arrow_prev" onClick={onClick}>    
      <i className="icon-leftArrow"></i>
    </div>
  );
}

class ProductsSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <div className="products-slider">
        <Slider {...settings}>
          <div className="products-slider__item">
            <div className="products-slider__star-ratings">
              <img src={rating} alt="rating" className="products-slider__rating-img" />
            </div>
            <h3 className="products-slider__product-name">BD 500 mg Orange Flavor Tincture</h3>
            <div className="products-slider__product-img-holder">
              <img src={bottle} alt="bottleOfOrangeFlavorTincture" className="products-slider__product-img" />
            </div>
            <div className="products-slider__price-holder">
              <span className="products-slider__price">$49.99 USD</span>
              <Button blockName="products-slider" text="Shop"/>
            </div>
          </div>
          <div className="products-slider__item">
            <div className="products-slider__star-ratings">
              <img src={rating} alt="rating" className="products-slider__rating-img" />
            </div>
            <h3 className="products-slider__product-name">Black ICE CBD Muscle Rub 200 mg</h3>
            <div className="products-slider__product-img-holder">
              <img src={box} alt="bottleOfOrangeFlavorTincture" className="products-slider__product-img" />
            </div>
            <div className="products-slider__price-holder">
              <span className="products-slider__price">$49.99 USD</span>
              <Button blockName="products-slider" text="Shop"/>
            </div>
          </div>
          <div className="products-slider__item">
            <div className="products-slider__star-ratings">
              <img src={rating} alt="rating" className="products-slider__rating-img" />
            </div>
            <h3 className="products-slider__product-name">CBD+Curcumin Coffee 750 mg</h3>
            <div className="products-slider__product-img-holder">
              <img src={coffee} alt="bottleOfOrangeFlavorTincture" className="products-slider__product-img" />
            </div>
            <div className="products-slider__price-holder">
              <span className="products-slider__price">$79.99 USD</span>
              <Button blockName="products-slider" text="Shop"/>
            </div>
          </div>
          <div className="products-slider__item">
            <div className="products-slider__star-ratings">
              <img src={rating} alt="rating" className="products-slider__rating-img" />
            </div>
            <h3 className="products-slider__product-name">Black ICE CBD Muscle Rub 200 mg</h3>
            <div className="products-slider__product-img-holder">
              <img src={box} alt="bottleOfOrangeFlavorTincture" className="products-slider__product-img" />
            </div>
            <div className="products-slider__price-holder">
              <span className="products-slider__price">$49.99 USD</span>
              <Button blockName="products-slider" text="Shop"/>
            </div>
          </div>
          <div className="products-slider__item">
            <div className="products-slider__star-ratings">
              <img src={rating} alt="rating" className="products-slider__rating-img" />
            </div>
            <h3 className="products-slider__product-name">CBD+Curcumin Coffee 750 mg</h3>
            <div className="products-slider__product-img-holder">
              <img src={coffee} alt="bottleOfOrangeFlavorTincture" className="products-slider__product-img" />
            </div>
            <div className="products-slider__price-holder">
              <span className="products-slider__price">$79.99 USD</span>
              <Button blockName="products-slider" text="Shop"/>
            </div>
          </div>
          <div className="products-slider__item">
            <div className="products-slider__star-ratings">
              <img src={rating} alt="rating" className="products-slider__rating-img" />
            </div>
            <h3 className="products-slider__product-name">BD 500 mg Orange Flavor Tincture</h3>
            <div className="products-slider__product-img-holder">
              <img src={bottle} alt="bottleOfOrangeFlavorTincture" className="products-slider__product-img" />
            </div>
            <div className="products-slider__price-holder">
              <span className="products-slider__price">$49.99 USD</span>
              <Button blockName="products-slider" text="Shop"/>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default ProductsSlider;