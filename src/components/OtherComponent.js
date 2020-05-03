import React from "react";

export default function OtherComponent() {
  sleep(4000);

//   return <p>SOmething was returned!</p>;
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
