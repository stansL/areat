import React from "react";

export default function AnotherComponent() {
  sleep(1000);

  return <p>This comes from the second component!</p>;
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
