import { FETCH_USERS, CLEAR_USERS } from "../actions/types";

export const usersReducer = (users = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    case CLEAR_USERS:
      return [];
    default:
      return users;
  }
};
