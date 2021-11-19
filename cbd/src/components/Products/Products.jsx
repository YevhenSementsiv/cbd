import React from "react";
import ProductsSlider from "../ProductsSlider";
import "./products.scss";

const Products = () => {
  return (
    <section className="products" id="products">
      <h2 className="products__title">CBD Featured Product</h2>
      <ProductsSlider />
    </section>
  );
};

export default Products;