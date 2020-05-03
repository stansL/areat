import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentD extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => <div>Component D: {username} </div>}
      </UserConsumer>
    );
  }
}

export default ComponentD;
