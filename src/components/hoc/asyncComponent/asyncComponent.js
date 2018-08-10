//  Zach's asyncComponent:
//  Though this component is a functional component, you must import Component
//  because we will be returning a stateful component.
import React, { Component } from "react";

const asyncComponent = importComponent => {
  return class extends Component {
    //  The state.component is set to null, because we will be loading this code always loads
    //  but below when we check if state.component is truthy, it will actually load a chunk.
    state = {
      component: null
    };
    //  And we want to do this in the componentDidMount lifecycle hook because we only
    //  want the state.component to reflect a truthy populated value when the component
    //  we are currently in mounts.
    componentDidMount() {
      //  We recieved importComponent as props earlier, and when it is called here, we return
      //  a promise that sets the state.component to what ends up being cmp.component
      //  asynchronously.
      importComponent().then(cmp => {
        this.setState({ component: cmp.default });
      });
    }
    render() {
      const C = this.state.component;
      //  The render method will now either render a null value when it is initially downloaded,
      //  or it will populate the component passed to
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
