import { returnErrors } from "./_errorActions";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from "./types";

// Check token & Load User
export const loadUser = () => (dispatch) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  const token = localStorage.getItem("login_type");

  const data = {
    userName: "admin",
    password: "admin",
    token: "admin",
  };

  if (token === "admin") {
    dispatch({
      type: USER_LOADED,
      payload: data,
    });
  } else {
    console.log(data);
    dispatch(
      returnErrors("User Name or Password in Not in Database", "AUTH_ERROR")
    );
    dispatch({ type: AUTH_ERROR });
  }
};

// Login User
export const login =
  ({ userName, password }) =>
  (dispatch) => {
    const data = {
      userName: userName,
      password: password,
      token: "admin",
    };

    console.log(data);

    if (userName === "admin" && password === "admin") {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
    } else {
      dispatch(
        returnErrors(
          "User Name or Password in Not in Database",
          200,
          "LOGIN_FAIL"
        )
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
