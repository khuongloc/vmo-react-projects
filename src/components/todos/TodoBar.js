import React, { useState, useRef } from "react";
import { connect } from "react-redux";

import {
  createAddTodo,
  createCompleteAll,
  createUnCompleteAll,
} from "../../actions/todos";

const TodoBar = (props) => {
  const [todoText, setTodoText] = useState("");
  const [isCompleteAll, setIsCompleteAll] = useState(false);
  const inputRef = useRef(null);

  const handleInputChane = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createAddTodo({
      id: new Date().getTime(),
      todo: todoText,
      status: "active",
    });
    setTodoText("");
    inputRef.current.focus();
  };

  const handleCompleteAll = () => {
    if (isCompleteAll) {
      props.createUnCompleteAll();
    } else {
      props.createCompleteAll();
    }
    setIsCompleteAll(!isCompleteAll);
  };

  return (
    <form onSubmit={handleSubmit} className="py-2 flex items-center border-b-2">
      <i
        onClick={handleCompleteAll}
        className="fas fa-chevron-down md:text-2xl mr-2 md:mr-5 ml-2 text-gray-400"
      ></i>
      <input
        ref={inputRef}
        onChange={handleInputChane}
        value={todoText}
        type="text"
        placeholder="What need to be done?"
        className="text-2xl focus:outline-none"
      />
    </form>
  );
};

export default connect(null, {
  createAddTodo,
  createCompleteAll,
  createUnCompleteAll,
})(TodoBar);
