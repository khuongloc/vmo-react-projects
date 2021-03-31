import React from "react";
import { connect } from "react-redux";

import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { todos } = props;
  const renderList = () => {
    switch (todos.filter) {
      case "all":
        return todos.list.map((item) => <TodoItem key={item.id} {...item} />);

      case "active":
        return todos.list
          .filter((item) => item.status === "active")
          .map((item) => <TodoItem key={item.id} {...item} />);

      case "completed":
        return todos.list
          .filter((item) => item.status === "completed")
          .map((item) => <TodoItem key={item.id} {...item} />);

      default:
        return todos.list.map((item) => <TodoItem key={item.id} {...item} />);
    }
  };
  return <div>{renderList()}</div>;
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(TodoList);
