import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import CodeSplitting from './components/CodeSplitting';
// import ForwardingRefs from "./components/ForwardingRefs";
// import MyApp from "./MyApp";
import HOC from "./components/HOC";
ReactDOM.render(
  <React.StrictMode>
    <HOC />
  </React.StrictMode>,
  document.getElementById("root")
);
