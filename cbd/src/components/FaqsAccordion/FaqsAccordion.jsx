import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./faqsAccordion.scss";

export default function FaqsAccordion() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
              <span className="accordion__icon-holder">
                <i className="icon-plus"></i>
              </span>
              <span className="accordion__btn-text">
                What is Cannabidiol (CBD)?
              </span>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accordion__text-holder">
            <p className="accordion__paragraph">
              Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
              occaecat ut occaecat consequat est minim minim esse tempor laborum
              consequat esse adipisicing eu reprehenderit enim.
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <span className="accordion__icon-holder">
              <i className="icon-plus"></i>
            </span>
            <span className="accordion__btn-text">
              Is Hemp-Derived Cannabidiol (CBD) Legal?
            </span>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accordion__text-holder">
            <p className="accordion__paragraph">
              Because CBD from hemp has no psychoactive effects, the purchase, sales, or possession of hemp CBD products are completely legal in all 50 States. 
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <span className="accordion__icon-holder">
              <i className="icon-plus"></i>
            </span>
            <span className="accordion__btn-text">
              Are there any negative side effects? 
            </span>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accordion__text-holder">
            <p className="accordion__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, omnis, repudiandae modi quas nostrum quibusdam cumque neque aliquid quae dolorum asperiores harum.
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <span className="accordion__icon-holder">
              <i className="icon-plus"></i>
            </span>
            <span className="accordion__btn-text">
              Do you offer a return policy?
            </span>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="accordion__text-holder">
            <p className="accordion__paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed nobis voluptate in obcaecati nam!
            </p>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
