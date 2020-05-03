import React from "react";

// function ForwardRefInput() {
//   return (
//     <div>
//       <input type="text" placeholder = "sfafddasfsadf" />
//     </div>
//   );
// }

const ForwardRefInput = React.forwardRef((props,ref) => {
  return (
    <div>
      <input type="text" placeholder="sfafddasfsadf" ref = {ref} />
    </div>
  );
});

export default ForwardRefInput;
