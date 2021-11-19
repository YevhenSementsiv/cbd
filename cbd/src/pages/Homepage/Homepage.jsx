import React from "react";
import MainLayout from "../../layout/MainLayout";
import Intro from "../../components/Intro/Intro";
import About from "../../components/About/About";
import Products from "../../components/Products/Products";
import Faqs from "../../components/Faqs/Faqs";
import Testimonials from "../../components/Testimonials/Testimonials";

const Homepage = () => {
  return (
    <MainLayout>
      <Intro />
      <About />
      <Products />
      <Faqs />
      <Testimonials />
    </MainLayout>
  )
};

export default Homepage;