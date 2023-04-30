import { createSlice } from "@reduxjs/toolkit";

const FavoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    products: [],
    favoritesExist: false,
  },
  reducers: {
    addfavoriteProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removefavoriteProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { addfavoriteProduct, removefavoriteProduct } =
  FavoriteSlice.actions;
export default FavoriteSlice.reducer;
