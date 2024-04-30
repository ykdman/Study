import { createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

createSlice({
  name: "counter",
});

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment": {
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    }
    case "increase": {
      const { step } = action;
      return {
        counter: state.counter + +step,
        showCounter: state.showCounter,
      };
    }

    case "showcounter": {
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    }

    case "decrement": {
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(counterReducer);

export default store;
