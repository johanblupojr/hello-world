import React, { createElement } from "react";

const Hello = () => {
  // return(
  //     <div className='dummyClass'>
  //         <h1> Hello Johan </h1>
  //     </div>
  // )

  // without JSX
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" }, //null
    React.createElement("h1", null, "Hello Johan")
  );
};

export default Hello;
