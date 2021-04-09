import React, { useState, useEffect, useRef } from "react";

const UserCard = (props) => {
  const [pos, setPos] = useState(0);
  const [index, setIndex] = useState(Number(props.idx));

  const userRef = useRef(null);

  useEffect(() => {
    const idTimerFist = setTimeout(() => {
      setPos(userRef.current.clientHeight * props.idx);
    }, 100);

    return () => {
      clearTimeout(idTimerFist);
    };
  }, [props.idx]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (index === props.total - 1) {
        setPos(0);
        setIndex(0);
      } else {
        setPos(userRef.current.clientHeight * (index + 1));
        setIndex(index + 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [index, props.total]);

  return (
    <div
      ref={userRef}
      style={{ top: `${pos}px` }}
      className={`flex items-center  bg-gray-100 transition-all duration-1000 w-full absolute ${
        props.total - 1 === index ? "z-50" : "z-0"
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
