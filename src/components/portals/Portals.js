import React, { Component } from "react";
import ReactDOM from "react-dom";

class Portals extends Component {
  render() {
    return ReactDOM.createPortal(
      <div>
        <h1>Some Portals stuff </h1>
      </div>,
      document.getElementById("portals")
    );
  }
}

export default Portals;
