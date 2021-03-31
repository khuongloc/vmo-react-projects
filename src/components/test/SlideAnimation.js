import React, { useState, useEffect } from "react";

const data = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
  { id: 4, name: "D" },
];

const SlideAnimation = () => {
  const [index, setIndex] = useState(0);

  const checkIndex = (index) => {
    if (index < 0) {
      index = data.length - 1;
    }
    if (index > data.length - 1) {
      index = 0;
    }
    return index;
  };

  const renderSlide = () => {
    return data.map((item, idx) => {
      let slidePos = "next";

      if (idx === index) {
        slidePos = "active";
      }

      if (idx === index - 1 || (index === 0 && idx === data.length - 1)) {
        slidePos = "prev";
      }

      return (
        <div
          key={item.id}
          className={`w-96 h-96 bg-red-400 absolute -translate-x-1/2	transform left-1/2 opacity-0 transition duration-1000 ${slidePos}`}
        >
          <h1>{item.name}</h1>
        </div>
      );
    });
  };

  useEffect(() => {
    const slideId = setInterval(() => {
      setIndex(checkIndex(index + 1));
    }, 3000);

    return () => {
      clearInterval(slideId);
    };
  }, [index]);

  return (
    <div>
      <div className="h-96 w-full bg-gray-400 flex relative overflow-hidden">
        {renderSlide()}
      </div>
      <button onClick={() => setIndex((index) => checkIndex(index - 1))}>
        Prev
      </button>
      <button onClick={() => setIndex((index) => checkIndex(index + 1))}>
        Next
      </button>
    </div>
  );
};

export default SlideAnimation;
