import React, { Component } from "react";
import ForwardRefInput from "./ForwardRefInput";

class FRParentInput extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  handleClick = (e) => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <ForwardRefInput ref={this.inputRef} />
        <button onClick={this.handleClick}>Focus Input</button>
      </div>
    );
  }
}

export default FRParentInput;
