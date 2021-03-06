import React from "react";
import "./DrawerToggleButton.css";
const drawerToggleButton = props => {
  let toggleClasses = ["toggle-button"];
  props.drawerOpen
    ? (toggleClasses = ["hamburger hamburger--arrowalt", "is-active"].join(" "))
    : (toggleClasses = ["hamburger hamburger--arrowalt"].join(" "));
  return (
    <button className={toggleClasses} type="button" onClick={props.click}>
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
};

export default drawerToggleButton;
