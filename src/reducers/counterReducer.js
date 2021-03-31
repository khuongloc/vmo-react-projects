import {
  COUNTER_RESET,
  COUNTER_INCREASE,
  COUNTER_DECREASE,
} from "../actions/types";

export const counterReducer = (count = { value: 0 }, action) => {
  switch (action.type) {
    case COUNTER_RESET:
      return { value: 0 };
    case COUNTER_DECREASE:
      return { ...count, value: count.value - 1 };
    case COUNTER_INCREASE:
      return { ...count, value: count.value + 1 };
    default:
      return count;
  }
};
