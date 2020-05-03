import React from "react";
import FancyButton from "./FancyButton";

class ForwardingRefs extends React.Component {
  render() {
    return (
      <div>
        <p>Refs stuff here</p>

        <FancyButton />
      </div>
    );
  }
}

export default ForwardingRefs;


// const FancyButton = React.forwardRef((props, ref) => (
//     <button ref={ref} className="FancyButton">
//       {props.children}
//     </button>
//   ));
  
//   // You can now get a ref directly to the DOM button:
//   const ref = React.createRef();
//   <FancyButton ref={ref}>Click me!</FancyButton>;