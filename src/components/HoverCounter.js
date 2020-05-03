import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  

  render() {
    const { count,incrementCount,name } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>
         {name} Higher Order Components: Hovered {count} times
        </h1>
      </div>
    );
  }
}

export default withCounter(HoverCounter,3);
