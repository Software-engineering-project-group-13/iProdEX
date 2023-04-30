import { createSlice } from "@reduxjs/toolkit";

const FavoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    products: [],
    favoritesExist: false,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct, removeProduct } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
