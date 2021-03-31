import { COUNTER_RESET, COUNTER_DECREASE, COUNTER_INCREASE } from "./types";

export const createCounterReset = () => ({
  type: COUNTER_RESET,
});

export const createCounterDecrease = () => ({
  type: COUNTER_DECREASE,
});

export const createCounterIncrease = () => ({
  type: COUNTER_INCREASE,
});
