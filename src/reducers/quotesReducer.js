import { FETCH_QUOTES } from "../actions/types";

export const quotesReducer = (quotes = [], action) => {
  switch (action.type) {
    case FETCH_QUOTES:
      return action.payload;
    default:
      return quotes;
  }
};
