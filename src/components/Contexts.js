import React, { PureComponent } from "react";
import ComponentA from "./contexts/ComponentA";
import ComponentB from "./contexts/ComponentB";
import ComponentC from "./contexts/ComponentC";
import { UserProvider, ChannelContext } from "./contexts/userContext";
// Provides a way to pass data through to the component tree without having to pass props down manually at every level

// 1. Create the Context
// 2. Provide a context value
// 3. Consume the context value at the required depth

class Contexts extends PureComponent {
  updateColorMap(colormap) {
    // testing out the spread operator on updating an object in an immutable way - same functionality as Object.assign
    return { ...colormap, right: "blue" };
  }

  // updateColorMap(colormap) {
  //   return Object.assign({}, colormap, {right: 'blue'});
  // }

  render() {
    console.log("Double ");
    var colormap = { right: "red", left: "Green" };
    console.log(colormap);

    colormap = this.updateColorMap(colormap);
    console.log(colormap);

    return (
      <div>
        <UserProvider value="Stanslaus">
          <ChannelContext.Provider value = "React Contexts Tutorial">
            <ComponentA />
            <ComponentB />
            <ComponentC />
          </ChannelContext.Provider>
        </UserProvider>
      </div>
    );
  }
}

export default Contexts;
