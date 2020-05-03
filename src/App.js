import React from "react";
import { Button } from "@material-ui/core";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

// Create a context
const ThemeContext = React.createContext(themes.dark);
ThemeContext.displayName = "MyDisplayName";
class App extends React.Component {
  render() {
    //Use a Provider to pass the current context value to the tree below
    // Any component can read it irrespective of how deep it is
    return (
      <ThemeContext.Provider value={themes.light}>
        <ToolBar />
      </ThemeContext.Provider>
    );
  }
}

function ToolBar(props) {
  return (
    //   A component in the middle doesn't have to pass the context value down explicitly anymore
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // assign a contextType to read the current theme context, react finds the closest Provider above and uses its value
  static contextType = ThemeContext;
  render() {
    return (
      <Button
        theme={this.context}
        style={{ backgroundColor: this.context.background }}
      >
        {" "}
        Passed Theme
      </Button>
    );
  }
}

export default App;
