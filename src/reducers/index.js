import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { quotesReducer } from "./quotesReducer";
import { todosReducer } from "./todosReducer";

export default combineReducers({
  count: counterReducer,
  quotes: quotesReducer,
  todos: todosReducer,
});
