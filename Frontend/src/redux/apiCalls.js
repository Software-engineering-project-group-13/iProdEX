import { publicRequest } from "../requestMethods";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerSuccess,
  logoutSuccess,
  logoutFailure,
} from "./userRedux";

import { addfavoriteProduct, removefavoriteProduct } from "./favoriteRedux";
import { addsellerProduct, removesellerProduct } from "./sellerItemsRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  //   console.log(user);
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const signup = async (dispatch, user) => {
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const logout = async (dispatch) => {
  try {
    localStorage.clear();
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(logoutFailure());
  }
};

export const addfavorite = async (dispatch, user, product) => {
  try {
    // console.log(product);
    const res = await publicRequest.post("/favorites/" + user, product);
    console.log(res.data);
    dispatch(addfavoriteProduct(res.data));
  } catch (err) {
    dispatch(err);
  }
};

export const removefavorite = async (dispatch, user, product) => {
  console.log(product);
  try {
    const res = await publicRequest.post("/favorites/delete/" + user, product);
    console.log(res.data);
    dispatch(removefavoriteProduct(res.data));
  } catch (err) {
    dispatch(err);
  }
};

export const addProduct = async (dispatch, user, product) => {
  try {
    // console.log(product);
    const res = await publicRequest.post("/selleritems/" + user, product);
    console.log(res.data);
    dispatch(addsellerProduct(res.data));
  } catch (err) {
    dispatch(err);
  }
};

export const removeProduct = async (dispatch, user, product) => {
  console.log(product);
  try {
    const res = await publicRequest.post(
      "/selleritems/delete/" + user,
      product
    );
    console.log(res.data);
    dispatch(removesellerProduct(res.data));
  } catch (err) {
    dispatch(err);
  }
};
