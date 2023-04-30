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

import { addProduct, removeProduct } from "./favoriteRedux";

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
    dispatch(addProduct(res.data));
  } catch (err) {
    dispatch(err);
  }
};

export const removefavorite = async (dispatch, user, product) => {
  console.log(product);
  try {
    const res = await publicRequest.post("/favorites/delete/" + user, product);
    console.log(res.data);
    dispatch(removeProduct(res.data));
  } catch (err) {
    dispatch(err);
  }
};
