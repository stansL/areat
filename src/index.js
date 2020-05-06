import React, { Profiler } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import CodeSplitting from './components/CodeSplitting';
// import ForwardingRefs from "./components/ForwardingRefs";
// import MyApp from "./MyApp";
// import HOC from "./components/HOC";
// import Portals from "./components/portals/Portals";
import Contexts from "./components/Contexts";

const callBack = (
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) => {

  console.log(id,phase,actualDuration,baseDuration,startTime,commitTime,interactions);
  
};

ReactDOM.render(
  <React.StrictMode>
    <Profiler id="Contexts" onRender={callBack}>
      <Contexts />
    </Profiler>
  </React.StrictMode>,
  document.getElementById("root")
);
