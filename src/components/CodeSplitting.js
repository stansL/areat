import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
// import OtherComponent from "./OtherComponent";
// import { add } from "./math";

const OtherComponent = React.lazy(() => import("./OtherComponent"));
const AnotherComponent = React.lazy(() => import("./AnotherComponent"));

class CodeSplitting extends React.Component {
  // Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user,
  // which can dramatically improve txhe performance of your app.

  render() {
    // console.log(add(12, 8));

    // Dynamic import
    import("./math").then((math) => {
      console.log(math.add(16, 26));
    });
    return (
      <div>
        <h2>Trials</h2>

        <ErrorBoundary>
          <Suspense fallback={<div>Loading teden....... </div>}>
            <OtherComponent />
          </Suspense>
        </ErrorBoundary>

        <Suspense fallback={<div>Loading the second here....... </div>}>
          <AnotherComponent />
        </Suspense>
      </div>
    );
  }
}

export default CodeSplitting;
