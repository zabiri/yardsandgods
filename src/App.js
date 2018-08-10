import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Backdrop from "./components/Backdrop/Backdrop";
import DrawerToggleButton from "./components/SideDrawer/DrawerToggleButton";

import SideDrawer from "./components/SideDrawer/SideDrawer";
import Footer from "./components/Footer/Footer";

import asyncComponent from "./components/hoc/asyncComponent/asyncComponent";

import "./App.css";

const About = asyncComponent(() => {
  return import("./components/Pages/About/About");
});
const Discography = asyncComponent(() => {
  return import("./components/Pages/Discography/Discography");
});
const Filmography = asyncComponent(() => {
  return import("./components/Pages/Filmography/Filmography");
});
const Contact = asyncComponent(() => {
  return import("./components/Pages/Contact/Contact");
});
const Home = asyncComponent(() => {
  return import("./components/Pages/Home/Home");
});

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  render() {
    let backdrop;
    let contentBoxClass;
    this.state.sideDrawerOpen
      ? (contentBoxClass = "App__contentBox App__contentBox-open")
      : (contentBoxClass = "App__contentBox");
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <BrowserRouter>
        <div className="App">
          <DrawerToggleButton
            click={this.drawerToggleClickHandler}
            drawerOpen={this.state.sideDrawerOpen}
          />
          {/* <Toolbar drawerClickHandler={this.drawerToggleClickHandler} /> */}
          <SideDrawer
            isOpen={this.state.sideDrawerOpen}
            linkClickHandler={this.backdropClickHandler}
          />
          {/* {sideDrawer} */}
          {backdrop}

          <main className={contentBoxClass}>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/discography" component={Discography} />
              <Route path="/filmography" component={Filmography} />
              <Route path="/contact" component={Contact} />
              <Route
                path="/"
                render={() => <Home click={this.drawerToggleClickHandler} />}
              />
            </Switch>
          </main>
          <Footer isOpen={this.state.sideDrawerOpen} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
