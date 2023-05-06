export const SET_COUNTER = "SET_COUNTER";
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export const setCounter = counter => ({
  type: SET_COUNTER,
  payload: counter
});

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER
});
