import React from "react";

const UserContext = React.createContext("username");
const ChannelContext = React.createContext("course");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, ChannelContext };
export default UserContext;
