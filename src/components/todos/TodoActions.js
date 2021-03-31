import React from "react";
import { connect } from "react-redux";

import {
  createTodosAll,
  createTodosActive,
  createTodosCompleted,
  createtodosClearAll,
} from "../../actions/todos";

const TodoActions = (props) => {
  const renderListLength = () => {
    switch (props.todos.filter) {
      case "all":
        return props.todos.list.length;
      case "active":
        return props.todos.list.filter((item) => item.status === "active")
          .length;
      case "completed":
        return props.todos.list.filter((item) => item.status === "completed")
          .length;
      default:
        return props.todos.list.length;
    }
  };

  return (
    <div className="flex-col md:flex-row flex justify-evenly py-2">
      <div className="text-center">{renderListLength()} item(s) left</div>
      <button
        className="px-1 focus:ouline-red"
        onClick={() => props.createTodosAll()}
      >
        All
      </button>
      <button
        className="px-1 focus:ouline-red"
        onClick={() => props.createTodosActive()}
      >
        Active
      </button>
      <button
        className="px-1 focus:ouline-red"
        onClick={() => props.createTodosCompleted()}
      >
        Completed
      </button>
      <button
        className="px-1 focus:ouline-red"
        onClick={() => props.createtodosClearAll()}
      >
        Clear All
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, {
  createTodosAll,
  createTodosActive,
  createTodosCompleted,
  createtodosClearAll,
})(TodoActions);
