import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center absolute top-0">
      <i className="fas fa-spinner animate-spin text-3xl"></i>
    </div>
  );
};

export default Loading;
