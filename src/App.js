import React, { Component } from "react";

import Backdrop from "./components/Backdrop/Backdrop";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import "./App.css";

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

    if (this.state.sideDrawerOpen) {

      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer isOpen={this.state.sideDrawerOpen}/>
        {/* {sideDrawer} */}
        {backdrop}
        <main style={{ marginTop: "64px" }}>
          <p>This is the page content</p>
        </main>
      </div>
    );
  }
}

export default App;
