import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

class ComponentE extends Component {
    // Limitations:
    //  1. Only works with class components
    //  2. Only subscribes to a single context

  static contextType = UserContext;
  render() {
    return (
      <div>
        Component E Context: {this.context}
        <ComponentF />
      </div>
    );
  }
}

// ComponentE.contextType = UserContext;

export default ComponentE;
