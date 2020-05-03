import React, { Component } from "react";
import withCounter from "./withCounter";

export class KeyCounter extends Component {
  

  render() {
    const { count,incrementCount } = this.props;
    return (
      <div>
        <label>
          <input
            type="text"
            placeholder="Enter Text"
            onKeyUp={incrementCount}
          />{" "}
          Keyed {count} times
        </label>
      </div>
    );
  }
}

export default withCounter(KeyCounter,5);
