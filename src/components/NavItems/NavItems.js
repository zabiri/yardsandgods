import React from "react";
import { NavLink } from 'react-router-dom'

import './NavItems.css'
const navItems = (props) => {
  return (
    <div className={props.whichNav}>
    	<ul>
    	  <li>
    	    <NavLink activeClassName="NavItems-active" onClick={props.clicked} to="/about">About</NavLink>
    	  </li>
    	  <li>
    	    <NavLink activeClassName="NavItems-active" onClick={props.clicked} to="/discography">Discography</NavLink>
    	  </li>
    	  <li>
    	    <NavLink activeClassName="NavItems-active" onClick={props.clicked} to="/filmography">Filmography</NavLink>
    	  </li>
    	  <li>
    	    <NavLink activeClassName="NavItems-active" onClick={props.clicked} to="/contact">Contact</NavLink>
    	  </li>
    	</ul>
    </div>
  );
};

export default navItems;
