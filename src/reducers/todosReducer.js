import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  UNCOMPLETE_TODO,
  COMPLETE_ALL,
  UNCOMPLETE_ALL,
  TODOS_ALL,
  TODOS_ACTIVE,
  TODOS_COMPLETED,
  TODOS_CLEAR_ALL,
} from "../actions/types";

export const todosReducer = (
  todos = {
    list: [],
    filter: "",
  },
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...todos, list: [...todos.list, action.payload] };

    case DELETE_TODO:
      return {
        ...todos,
        list: todos.list.filter((item) => item.id !== action.payload),
      };

    case COMPLETE_TODO:
      const listAfterCompleted = todos.list.map((item) => {
        if (item.id === action.payload) {
          return { ...item, status: "completed" };
        }
        return item;
      });
      return { ...todos, list: listAfterCompleted };

    case UNCOMPLETE_TODO:
      const listAfterUnCompleted = todos.list.map((item) => {
        if (item.id === action.payload) {
          return { ...item, status: "active" };
        }
        return item;
      });
      return { ...todos, list: listAfterUnCompleted };

    case COMPLETE_ALL:
      const listAfterCompletedAll = todos.list.map((item) => ({
        ...item,
        status: "completed",
      }));
      return { ...todos, list: listAfterCompletedAll };

    case UNCOMPLETE_ALL:
      const listAfterUnCompletedAll = todos.list.map((item) => ({
        ...item,
        status: "active",
      }));
      return { ...todos, list: listAfterUnCompletedAll };

    case TODOS_ALL:
      return { ...todos, filter: "all" };

    case TODOS_ACTIVE:
      return { ...todos, filter: "active" };

    case TODOS_COMPLETED:
      return { ...todos, filter: "completed" };

    case TODOS_CLEAR_ALL:
      return {
        list: [],
        filter: "",
      };

    default:
      return todos;
  }
};
