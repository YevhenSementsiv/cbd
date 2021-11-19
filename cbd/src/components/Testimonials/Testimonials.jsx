import React from "react";
import TestimonialsSlider from "../TestimonialsSlider/TestimonialsSlider";
import "./testimonials.scss";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <TestimonialsSlider />
      <div className="testimonials__slogan-holder">
        <span className="testimonials__slogan">CBD every day</span>
      </div>
    </section>
  );
};

export default Testimonials;