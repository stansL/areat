import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import KeyCounter from "./KeyCounter";

class HOC extends Component {
  render() {
    return (
      <div>
        <HoverCounter name= "Stanslaus" />
        <KeyCounter />
        <ClickCounter />
      </div>
    );
  }
}

export default HOC;
