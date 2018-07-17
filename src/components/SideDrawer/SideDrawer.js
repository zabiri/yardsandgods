import React from "react";
import { CSSTransition } from "react-transition-group";
import "./SideDrawer.css";
const sideDrawer = props => {
    const animationTiming = {
        enter: 400,
        exit: 400
    }
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      timeout={animationTiming}
      in={props.isOpen}
      classNames="SideDrawer"
    >
      <nav className="SideDrawer">
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>
      </nav>
    </CSSTransition>
  );
};

export default sideDrawer;
