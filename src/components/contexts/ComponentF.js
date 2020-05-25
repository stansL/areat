import React, { PureComponent } from "react";
import { UserConsumer, ChannelContext } from "./userContext";
import ComponentG from "./ComponentG";

class ComponentF extends PureComponent {
  render() {
    return (
      <>
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
        <ComponentG />
      </>
    );
  }
}

export default ComponentF;
