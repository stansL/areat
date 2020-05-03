import React, { Component, Fragment } from "react";
import FancyButton from "./FancyButton";
import FRParentInput from "./FRParentInput";

export class Fragments extends Component {
  render() {
    return (
      <>
        <FRParentInput />
        <FancyButton>
          <div>ddddd</div>
        </FancyButton>
      </>
    );
  }
}

export default Fragments;
