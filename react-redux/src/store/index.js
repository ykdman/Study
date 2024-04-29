import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "increment": {
      return {
        counter: state.counter + 1,
      };
    }
    case "increase": {
      const { step } = action;
      return {
        counter: state.counter + +step,
      };
    }

    case "decrement": {
      return {
        counter: state.counter - 1,
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(counterReducer);

export default store;
