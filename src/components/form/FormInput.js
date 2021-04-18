import React from "react";

const FromInput = (props) => {
  return (
    <input
      className="rounded-xl py-1 px-5 mr-2 w-full shadow-md focus:shadow-xl"
      type={props.type}
      placeholder={props.placeholder}
    ></input>
  );
};

export default FromInput;
