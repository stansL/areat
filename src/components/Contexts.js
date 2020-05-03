import React, { Component } from "react";
import ComponentA from "./contexts/ComponentA";
import ComponentB from "./contexts/ComponentB";
import ComponentC from "./contexts/ComponentC";
import { UserProvider } from "./contexts/userContext";
// Provides a way to pass data through to the component tree without having to pass props down manually at every level

// 1. Create the Context
// 2. Provide a context value
// 3. Consume the context value at the required depth

class Contexts extends Component {
  render() {
    return (
      <div>
        <UserProvider value="mstans">
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default Contexts;
