import React from "react";
import "./about.scss";
import logos from "../../images/about/logos.png";
import mountains from "../../images/about/mountains.png";
import wheat from "../../images/about/earsOfWheat.png";
import $ from 'jquery';

$(document).ready(function() {
	$('.tabs__link').click(function(e) {
		e.preventDefault();

		$('.tabs__link').removeClass('active');
		$('.tabs__content-item').removeClass('active');

		$(this).addClass('active');
		$($(this).attr('href')).addClass('active');
	})
});

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__title-holder">
        <h2 className="about__title">We are what we are</h2>
        <div className="about__logos-holder">
          <img src={logos} alt="logos" className="about__logos" />
        </div>
      </div>
      <div className="tabs">
        <ul className="tabs__list">
          <li className="tabs__list-item">
            <a className="tabs__link active" href="#first-tab">WHAT IS CBD?</a>
          </li>
          <li className="tabs__list-item">
            <a className="tabs__link" href="#second-tab">BENEFITS</a>
          </li>
          <li className="tabs__list-item">
            <a className="tabs__link" href="#third-tab">OUR DIFFERENCE</a>
          </li>
        </ul>
        <div className="tabs__content">
          <div className="tabs__content-item active" id="first-tab">
            <div className="tabs__column_left">
              <h4 className="tabs__title">WHAT IT IS AND HOW <br /> IT WORKS</h4>
              <div className="tabs__text-holder">
                <p className="tabs__paragraph">
                  CBD is short for cannabidiol. It is a phytocannabinoid found in hemp and known for supporting the body and mind in many ways.* Charlotte’s Web products have cannabinoids with CBD extract.
                </p>
                <p className="tabs__paragraph">
                  Not to be confused with oil from hemp seeds (which doesn’t contain cannabinoids), CBD comes from the flowers and leaves of the hemp plant.
                </p>
                <p className="tabs__paragraph">
                  Why does CBD work? The human body has a vast network of receptors, the endocannabinoid system.
                </p>
              </div>
            </div>
            <div className="tabs__column_right">
              <div className="tabs__img-holder_top">
                <img src={mountains} alt="greenMountains" />
              </div>
              <div className="tabs__img-holder_bottom">
                <img src={wheat} alt="earsOfWheat" />
              </div>
            </div>
          </div>
          <div className="tabs__content-item" id="second-tab">
            <div className="tabs__column_left">
              <h4 className="tabs__title">BENEFITS OF CBD IS</h4>
              <div className="tabs__text-holder">
                <p className="tabs__paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At dicta qui temporibus ut aliquid totam pariatur corrupti numquam aut adipisci excepturi autem et, laborum perferendis inventore hic modi quod? Veritatis suscipit repudiandae vitae.
                </p>
                <p className="tabs__paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, repellendus non, commodi porro enim perferendis pariatur harum voluptatum dolores necessitatibus, debitis inventore?
                </p>
                <p className="tabs__paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem harum nisi quas temporibus corrupti.
                </p>
              </div>
            </div>
            <div className="tabs__column_right">
              <div className="tabs__img-holder_top">
                <img src={mountains} alt="greenMountains" />
              </div>
              <div className="tabs__img-holder_bottom">
                <img src={wheat} alt="earsOfWheat" />
              </div>
            </div>
          </div>
          <div className="tabs__content-item" id="third-tab">
            <div className="tabs__column_left">
              <h4 className="tabs__title">OUR DIFFERENCE AT WORKS</h4>
              <div className="tabs__text-holder">
                <p className="tabs__paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti similique illo quasi at ducimus laboriosam, provident nulla ad suscipit minus incidunt tempora tenetur totam temporibus dicta minima iusto ex veniam architecto.
                </p>
                <p className="tabs__paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum earum nisi exercitationem optio veniam doloribus, ex, facilis alias eum ipsam non? Facilis, optio fuga?
                </p>
                <p className="tabs__paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, repudiandae mollitia. Magni doloremque iste facere! Ut, repudiandae obcaecati?
                </p>
              </div>
            </div>
            <div className="tabs__column_right">
              <div className="tabs__img-holder_top">
                <img src={mountains} alt="greenMountains" />
              </div>
              <div className="tabs__img-holder_bottom">
                <img src={wheat} alt="earsOfWheat" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;