import { axiosWithAuth } from "../axiosWithAuth";
import axios from "axios";

export const SIGNUP_POST_START = "SIGNUP_POST_START";
export const SIGNUP_POST_SUCCESS = "SIGNUP_POST_SUCCESS";
export const SIGNUP_POST_FAIL = "SIGNUP_POST_FAIL";
export const LOGIN_POST_START = "LOGIN_POST_START";
export const LOGIN_POST_SUCCESS = "LOGIN_POST_SUCCESS";
export const LOGIN_POST_FAIL = "LOGIN_POST_FAIL";

export const signupUser = (username, password) => dispatch => {
  dispatch({ type: SIGNUP_POST_START });

  axios
    .post("https://build-tieme.herokuapp.com/api/auth/register", { username, password })
    .then(res => {
      localStorage.setItem("token", res.data.token);
      console.log("Signup.js: I got you a dollar", res);
      dispatch({
        type: SIGNUP_POST_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("Signup.js: You gotta be quicker than that:", err.message);
      dispatch({
        type: SIGNUP_POST_FAIL,
        payload: err
      });
    });
};

export const loginUser = (username, password) => dispatch => {
  dispatch({ type: LOGIN_POST_START });

  axiosWithAuth()
    .post("https://build-tieme.herokuapp.com/api/auth/login", { username, password })
    .then(res => {
      console.log("Login.js: I got you a dollar", res);
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: LOGIN_POST_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("Login.js: You gotta be quicker than that:", err.message);
      dispatch({
        type: LOGIN_POST_FAIL,
        payload: err
      });
    });
};
