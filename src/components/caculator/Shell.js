import React from "react";

const Shell = (props) => {
  return (
    <div
      className={`border border-black hover:border-gray-500 text-white hover:text-black text-xl ${
        props.noHeight ? "" : "h-16"
      } flex justify-center items-center ${
        props.moreClass ? props.moreClass : ""
      }`}
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
};

export default Shell;
