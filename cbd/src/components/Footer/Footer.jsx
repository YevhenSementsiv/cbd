import React from "react";
import Logo from "../Logo/Logo";
import "./footer.scss";

const Footer = () => (
  <footer className="footer" id="footer">
    <div className="container">
      <div className="footer__head">
        <Logo blockName="footer" />
      </div>
      <div className="footer__contacts-holder">
        <ul className="footer__contacts-list">
          <li className="footer__contacts-list-item">
            <ul className="footer__policy-list">
              <li className="footer__policy-list-item">
                <a href="#" target="_blank" className="footer__policy-link">Privacy Policy</a>
              </li>
              <li className="footer__policy-list-item">
                <a href="#" target="_blank" className="footer__policy-link">Terms of Use</a>
              </li>
              <li className="footer__policy-list-item">
                <a href="#" target="_blank" className="footer__policy-link">Return Policy</a>
              </li>
            </ul>
          </li>
          <li className="footer__contacts-list-item">
            <div className="footer__social-holder">
              <ul className="footer__social-list">
                <li className="footer__social-list-item">
                  <a href="#" target="_blank" className="footer__social-link">
                    <i className="icon-facebook"></i>
                  </a>
                </li>
                <li className="footer__social-list-item">
                  <a href="#" target="_blank" className="footer__social-link">
                    <i className="icon-twitter"></i>
                  </a>
                </li>
                <li className="footer__social-list-item">
                  <a href="#" target="_blank" className="footer__social-link">
                    <i className="icon-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="footer__contacts-list-item">
            <ul className="footer__info-list">
              <li className="footer__info-list-item">
                <a href="#" target="_blank" className="footer__info-link">SHIPPING INFO</a>
              </li>
              <li className="footer__info-list-item">
                <a href="#" target="_blank" className="footer__info-link">RETURNS / EXCHANGES</a>
              </li>
              <li className="footer__info-list-item">
                <a href="#" target="_blank" className="footer__info-link">CONTACT</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="footer__form-holder">
        <h2 className="footer__form-title">Subscribe to Newsletter</h2>
        <form action="#" className="footer__form">
          <input type="email" className="footer__input" placeholder="Email" required />
          <button type="submit" className="footer__btn">
            <i className="icon-rightArrow"></i>
          </button>
        </form>
      </div>
      <div className="footer__rights-holder">
        <h3 className="footer__rights">© 2018. CbD health.</h3>
      </div>
    </div>
  </footer>
);

export default Footer;