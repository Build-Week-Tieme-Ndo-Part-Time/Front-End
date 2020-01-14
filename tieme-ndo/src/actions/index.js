import { axiosWithAuth } from "../axiosWithAuth";
import axios from "axios";

export const SIGNUP_POST_START = "SIGNUP_POST_START";
export const SIGNUP_POST_SUCCESS = "SIGNUP_POST_SUCCESS";
export const SIGNUP_POST_FAIL = "SIGNUP_POST_FAIL";





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

export const LOGIN_POST_START = "LOGIN_POST_START";
export const LOGIN_POST_SUCCESS = "LOGIN_POST_SUCCESS";
export const LOGIN_POST_FAIL = "LOGIN_POST_FAIL";

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



export const GET_CLIENT_START = "GET_CLIENT_START";
export const GET_CLIENT_SUCCESS = "GET_CLIENT_SUCCESS";
export const GET_CLIENT_FAILED = "GET_CLIENT_FAILED";


export const getClientData = () => dispatch => {
  dispatch({ type: GET_CLIENT_START });
  axiosWithAuth().get("https://build-tieme.herokuapp.com/newClients")
    .then(res => {
      console.log('GET: got the info', res);
      dispatch({
        type: GET_CLIENT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log('GET: SIIIIKKKKE', err);
      dispatch({
        type: GET_CLIENT_FAILED,
        payload: err
      });
    });
};


export const ADD_CLIENT_START = "ADD_CLIENT_START";
export const ADD_CLIENT_SUCCESS = "ADD_CLIENT_SUCCESS";
export const ADD_CLIENT_FAILED = "ADD_CLIENT_FAILED";


export const addClientData = newData => {
  return (dispatch) => {
    dispatch({ type: ADD_CLIENT_START });
    axiosWithAuth().post("https://build-tieme.herokuapp.com/newClients", newData)
      .then(res => {
        console.log('ADD: Post Malone', res);
        dispatch({
          type: ADD_CLIENT_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log("ADD: WaterMalooonnee", err);
        dispatch({
          type: ADD_CLIENT_FAILED,
          payload: err
        });
      });
  }
}

export const GET_SINGLE_CLIENT_START = "GET_SINGLE_CLIENT_START";
export const GET_SINGLE_CLIENT_SUCCESS = "GET_SINGLE_CLIENT_SUCCESS";
export const GET_SINGLE_CLIENT_FAILED = "GET_SINGLE_CLIENT_FAILED";

export const getSingleClient = id => dispatch => {
  dispatch({ type: GET_SINGLE_CLIENT_START });
  axiosWithAuth().get(`https://build-tieme.herokuapp.com/newClients/${id}`)
    .then(res => {
      console.log('ID GET: YOU GOT A FRIEND', res);
      dispatch({
        type: GET_SINGLE_CLIENT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ID GET: YOU GOT NOBODY", err);
      dispatch({
        type: GET_SINGLE_CLIENT_FAILED,
        payload: err
      });
    });
}

export const DELETE_CLIENT_START = "DELETE_CLIENT_START";
export const DELETE_CLIENT_SUCCESS = "DELETE_CLIENT_SUCCESS";
export const DELETE_CLIENT_FAILED = "DELETE_CLIENT_FAILED";

export const deleteClients = id => dispatch => {
  dispatch({ type: DELETE_CLIENT_START });
  axiosWithAuth().delete(`https://build-tieme.herokuapp.com/newClients/${id}`)
    .then(res => {
      console.log("DELETE: BYE BYE BYE", res)
      dispatch({
        type: DELETE_CLIENT_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log("DELETE: IM STILL HERE", err);
      dispatch({
        type: GET_SINGLE_CLIENT_FAILED,
        payload: err
      });
    });
}

