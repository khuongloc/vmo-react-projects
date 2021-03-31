import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const preloadState = localStorage.getItem("todos")
  ? {
      count: {
        value: 0,
      },
      todos: JSON.parse(localStorage.getItem("todos")),
      quotes: [],
    }
  : {};

export const store = createStore(
  reducers,
  preloadState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState().todos));
});
