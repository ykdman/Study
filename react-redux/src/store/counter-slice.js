import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
/** Redux - Toolkit */
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++; // 기존 return 문이 이렇게 바뀐다.
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      //필요하면 여전히 action을 입력 받을 수 있다.
      state.counter = state.counter + action.payload.step; // payload 키에 type을 제외한 모든 인수를 저장한다.
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
