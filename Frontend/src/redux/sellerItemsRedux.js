import { createSlice } from "@reduxjs/toolkit";

const sellerItemsSlice = createSlice({
  name: "sellerItems",
  initialState: {
    products: [],
    favoritesExist: false,
  },
  reducers: {
    addsellerProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removesellerProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { addsellerProduct, removesellerProduct } =
  sellerItemsSlice.actions;
export default sellerItemsSlice.reducer;
