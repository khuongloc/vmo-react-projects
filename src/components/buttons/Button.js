import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        style={{
          backgroundColor: props.bgCustom ? props.bgCustom : "rgba(17, 24, 39)",
        }}
        className={`rounded text-white hover:opacity-95 transition focus:outline-none ${
          props.moreClass ? props.moreClass : ""
        }`}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </>
  );
};

export default Button;
