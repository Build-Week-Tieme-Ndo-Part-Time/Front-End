import { axiosWithAuth } from "../axiosWithAuth";

export const SIGNUP_POST_START = "SIGNUP_POST_START";
export const SIGNUP_POST_SUCCESS = "SIGNUP_POST_SUCCESS";
export const SIGNUP_POST_FAIL = "SIGNUP_POST_FAIL";
export const LOGIN_POST_START = "LOGIN_POST_START";
export const LOGIN_POST_SUCCESS = "LOGIN_POST_SUCCESS";
export const LOGIN_POST_FAIL = "LOGIN_POST_FAIL";

export const signupUser = (username, password) => dispatch => {
  dispatch({ type: SIGNUP_POST_START });

  axiosWithAuth()
    .post("/signup", { username, password })
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

export const loginUser = userInfo => dispatch => {
  dispatch({ type: LOGIN_POST_START });

  axiosWithAuth()
    .post("/login", userInfo)
    .then(res => {
      console.log("Login,js: I got you a dollar", res);
      localStorage.setItem("token", res.data.payload);
      this.props.history.push("/");
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

// fetchClient imports to fetchClient
export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchClient = () => dispatch => {
  dispatch({type:START_FETCHING});

  axiosWithAuth()
  .get('/clients')
    .then(response => dispatch({ type: FETCH_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.response }));
};

// imports to NewClient.js
export const ADD_CLIENT = "ADD_CLIENT";

export const addClient = id => dispatch => {
  axiosWithAuth()
    .post('https://build-tieme.herokuapp.com/newClients', id)
    .then(response => dispatch({type:ADD_CLIENT, payload: id}) & console.log(response, "addClient"))
    .catch(response => dispatch({type: ADD_CLIENT, payload: id}))
}

// imports to EditClient.js
export const EDIT_CLIENT = "EDIT_CLIENT";

export const editClient = id => dispatch => {
  axiosWithAuth()
    .put('https://build-tieme.herokuapp.com/clients')
    .then(response => dispatch({EDIT_CLIENT, payload: id}))
    .catch(error => console.log(error));
}

// imports to DeleteClient.js
export const DELETE_CLIENT = "DELETE_CLIENT";

export const deleteClient = id => dispatch => {
  axiosWithAuth()
    .delete("clients/${id.id}")
    .then(response => dispatch({type: DELETE_CLIENT, payload: id}))
    .catch(error => console.log(error))
}
