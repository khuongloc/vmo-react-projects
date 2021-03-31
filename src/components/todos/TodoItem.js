import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  createDeleteTodo,
  createCompleteTodo,
  createUnCompleteTodo,
} from "../../actions/todos";

const TodoItem = (props) => {
  const [isComplete, setIsComplete] = useState(false);
  const [isShowDelete, setIsShowDelete] = useState(false);

  const handleComplete = () => {
    if (isComplete) {
      props.createUnCompleteTodo(props.id);
    } else {
      props.createCompleteTodo(props.id);
    }
    setIsComplete(!isComplete);
  };

  const handleDelete = () => {
    props.createDeleteTodo(props.id);
  };

  const handleMoseEnterItem = () => {
    setIsShowDelete(true);
  };

  const handleMouseLeaveItem = () => {
    setIsShowDelete(false);
  };

  useEffect(() => {
    if (props.status === "completed") {
      setIsComplete(true);
    }
  }, [props.status]);

  return (
    <div
      onMouseEnter={handleMoseEnterItem}
      onMouseLeave={handleMouseLeaveItem}
      className="flex items-center border-b-2 py-1"
    >
      <div
        onClick={handleComplete}
        className="relative flex justify-center items-center relative"
      >
        <i className="far fa-circle text-3xl text-gray-400 mr-5 ml-1"></i>
        {isComplete && props.status === "completed" && (
          <i className="fas fa-check text-green-600 absolute left-3"></i>
        )}
      </div>
      <div
        className={`${
          isComplete &&
          props.status === "completed" &&
          "line-through opacity-80"
        }`}
      >
        {props.todo}
      </div>
      {isShowDelete && (
        <i
          onClick={handleDelete}
          className="fas fa-times ml-auto transition duration-500 opacity-50 hover:opacity-100 text-2xl mr-2"
        ></i>
      )}
    </div>
  );
};

export default connect(null, {
  createDeleteTodo,
  createCompleteTodo,
  createUnCompleteTodo,
})(TodoItem);
