import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQty: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      // redux에는 action의 나머지 property 가 payload 에 들어있다.
      const newItem = action.payload;
      // 참조값 사용!
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQty++;
      if (!existingItem) {
        // 최초로 item 추가
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        // 이미 있는 item을 추가
        // existingItem이 Object 참조값이기 때문에, existing itme의 속성을 수정하면, item의 요소에도 반영된다.
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQty--;
      if (existingItem.quantity === 1) {
        // 줄이는 item 의 수량이 1 이면 삭제
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        // 줄이는 item의 수량이 1이상이면 감소
        existingItem.quantity = existingItem.quantity - 1;
        // 1개를 빼는 것이기 때문에 총 가격도 1개분의 감소가 일어나야함
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
