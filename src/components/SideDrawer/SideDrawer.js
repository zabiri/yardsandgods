import React from "react";
import { CSSTransition } from "react-transition-group";
import NavItems from "../NavItems/NavItems"
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
      
        <NavItems clicked={props.linkClickHandler} whichNav="SideDrawer"/>
      
    </CSSTransition>
  );
};

export default sideDrawer;
