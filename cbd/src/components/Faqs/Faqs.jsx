import React from "react";
import FaqsAccordion from "../FaqsAccordion";

import "./faqs.scss";

const Faqs = () => {
  return (
    <section className="faqs" id="faqs">
      <div className="container">
        <h2 className="faqs__title">requently asked question</h2>
        <FaqsAccordion />
      </div>
    </section>
  );
};

export default Faqs;