import React, { PureComponent } from "react";
import { UserConsumer,ChannelContext } from "./userContext";

class ComponentF extends PureComponent {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return (
            <ChannelContext.Consumer>
              {channel => {
                return <div>Component F: {username}, from {channel}</div>;
              }}
            </ChannelContext.Consumer>
          )
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
