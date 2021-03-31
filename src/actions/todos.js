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
} from "./types";

export const createAddTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const createDeleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const createCompleteTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: id,
});

export const createUnCompleteTodo = (id) => ({
  type: UNCOMPLETE_TODO,
  payload: id,
});

export const createCompleteAll = () => ({
  type: COMPLETE_ALL,
});

export const createUnCompleteAll = () => ({
  type: UNCOMPLETE_ALL,
});

export const createTodosAll = () => ({
  type: TODOS_ALL,
});

export const createTodosActive = () => ({
  type: TODOS_ACTIVE,
});

export const createTodosCompleted = () => ({
  type: TODOS_COMPLETED,
});

export const createtodosClearAll = () => ({
  type: TODOS_CLEAR_ALL,
});
