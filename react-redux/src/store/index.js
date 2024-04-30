import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increment": {
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//     }
//     case "increase": {
//       const { step } = action;
//       return {
//         counter: state.counter + +step,
//         showCounter: state.showCounter,
//       };
//     }

//     case "showcounter": {
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       };
//     }

//     case "decrement": {
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

// const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }, // 전역 상태를 담당하는 slice reducer 사용
});

export default store;
