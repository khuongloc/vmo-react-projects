import React, { useState, useEffect } from "react";

const UserCard = (props) => {
  const [isFade, setIsFade] = useState(false);

  useEffect(() => {
    const fadeId = setTimeout(() => {
      setIsFade(true);
    }, 300);
    return () => {
      clearTimeout(fadeId);
    };
  }, []);

  return (
    <div
      className={`flex items-center border bg-gray-500 transform transition duration-300 ${
        isFade ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={props.picture.medium}
        alt={`avatar of ${props.name.fist} ${props.name.last}`}
      />
      <div className="ml-2">
        {props.name.fist} {props.name.last}
      </div>
    </div>
  );
};

export default UserCard;
