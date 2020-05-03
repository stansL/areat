import React, { PureComponent } from "react";
import { UserConsumer } from "./userContext";

class ComponentF extends PureComponent {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div>Component F: {username}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
