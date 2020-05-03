import React from "react";

const withCounter = (WrappedComponent,increment = 1) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCount = (e) => {
      this.setState((prevState) => {
        return {
          count: prevState.count + increment,
        };
      });
    };

    render() {

        console.log(this.props.name);
        
      return <WrappedComponent count = {this.state.count} incrementCount = {this.incrementCount}  {... this.props}/>;
    }
  }
  return WithCounter;
};

export default withCounter;
