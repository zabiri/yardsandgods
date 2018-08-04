import React from "react";
import { NavLink } from "react-router-dom";

import "./NavItems.css";
const navItems = props => {
  return (
    <div className={props.whichNav}>
      <ul>
        <NavLink to="/" onClick={props.clicked}><h1 className="NavItems-header">Yards & Gods</h1></NavLink>
        <li>
          <NavLink
            activeClassName="NavItems-active"
            onClick={props.clicked}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="NavItems-active"
            onClick={props.clicked}
            to="/discography"
          >
            Discography
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="NavItems-active"
            onClick={props.clicked}
            to="/filmography"
          >
            Filmography
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="NavItems-active"
            onClick={props.clicked}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <h2 className="NavItems-footer">
          <a target="_blank" rel="noopener noreferrer" href="http://twitter.com/zachbiri">
            <i className="fab fa-twitter" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/zachbiri">
            <i className="fab fa-soundcloud" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/yardsandgods/">
            <i className="fab fa-facebook" />
          </a>
        </h2>
      </ul>
    </div>
  );
};

export default navItems;
