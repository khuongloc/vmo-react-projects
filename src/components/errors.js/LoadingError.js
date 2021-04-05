import React from "react";

const LoadingError = (props) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center absolute top-0">
      <div className="text-3xl text-red-600">{props.errorMessage}</div>
    </div>
  );
};

export default LoadingError;
