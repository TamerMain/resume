import { configureStore } from "@reduxjs/toolkit";
import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({
  reducer: {cartSlice: cartSlice.reducer, uiSlice: uiSlice.reducer }
});


export default store;
