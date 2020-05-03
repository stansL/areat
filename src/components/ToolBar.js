import React from "react";
import ThemedButton from "./ThemedButton";

export default function ToolBar(props) {
  return (
    //   A component in the middle doesnt have to pass the context value down explicitly anymore
    <div>
      <ThemedButton />
    </div>
  );
}
