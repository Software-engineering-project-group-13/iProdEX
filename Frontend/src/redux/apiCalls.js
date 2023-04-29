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
