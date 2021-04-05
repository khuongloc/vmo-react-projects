import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { quotesReducer } from "./quotesReducer";
import { todosReducer } from "./todosReducer";
import { usersReducer } from "./usersReducer";

export default combineReducers({
  count: counterReducer,
  quotes: quotesReducer,
  todos: todosReducer,
  users: usersReducer,
});
