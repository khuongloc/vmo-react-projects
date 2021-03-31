import React from "react";

import TodoBar from "./TodoBar";
import TodoList from "./TodoList";
import TodoActions from "./TodoActions";

const Todos = () => {
  return (
    <div className="w-full p-2 md:w-1/2 mx-auto ">
      <h1 className="text-red-200 text-6xl md:text-9xl text-center">Todos</h1>
      <div className="border-2 mt-5">
        <TodoBar />
        <TodoList />
        <TodoActions />
      </div>
    </div>
  );
};

export default Todos;
