import React from "react";
import Button from "@material-ui/core/Button";
import {ThemeContext} from '../App';

class ThemedButton extends React.Component {
    // assign a contextType to read the current theme context, react finds the closest Provider above and uses its value

    static contextType = ThemeContext;
  render() {
    return <Button theme={this.props.theme}> Passed Theme: {this.props.theme}</Button>;
  }
}

export default ThemedButton;
