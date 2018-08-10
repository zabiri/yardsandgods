import React from "react";
import "./Footer.css";
const Footer = props => {
  let footerClass;
  props.isOpen
    ? (footerClass = "Footer Footer-open")
    : (footerClass = "Footer");
  return (
    <footer className={footerClass}>
      <div className="Footer__logobox"> &nbsp; </div>
      <div className="Footer__flexcontainer">
        <div className="Footer__left Footer__cols">
          <p>Yards & Gods Forever</p>
        </div>
        <div className="Footer__right Footer__cols">
          <ul className="Footer__list">
            <li>
              <a href="http://zachbiri.com">
                <i className="fab fa-react" />
                &nbsp;
                <i className="fab fa-html5" />
                &nbsp;
                <i className="fab fa-js-square" />
                &nbsp;
                <i className="fab fa-sass" />: Zach Biri
              </a>
            </li>
            <li>
              <a href="mailto:zachbiri@gmail.com">
                <i className="fas fa-envelope" /> : zachbiri@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/yardsandgods/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook" /> : @yardsandgods
              </a>
            </li>
            <li>
              <a
                href="http://zachbiri.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-copyright" /> : Zach Biri 2018
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
