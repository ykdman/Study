import { configureStore } from "@reduxjs/toolkit";
import cartUiSlice from "./cartUi.slice";
import cartSlice from "./cart.slice";

const store = configureStore({
  reducer: { cartUi: cartUiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
