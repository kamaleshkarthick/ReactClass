import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    SET_COUNTER
  } from "../actions/counterActions";
  
  // ESTADO INICIAL
  const initialState = {
    count: 4,
    title: "This is Counter Reducer"
  };
  
  export const counter = (state = initialState, action) => {
    switch (action.type) {
      case SET_COUNTER:
        return {
          ...state,
          count: action.payload
        };
      case INCREMENT_COUNTER:
        return {
          ...state,
          count: state.count + 1
        };
      case DECREMENT_COUNTER:
        return {
          ...state,
          count: state.count - 1
        };
      default:
        return state;
    }
  };
  