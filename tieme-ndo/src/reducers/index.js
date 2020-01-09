import {
  SIGNUP_POST_START,
  SIGNUP_POST_SUCCESS,
  SIGNUP_POST_FAIL,
  LOGIN_POST_START,
  LOGIN_POST_SUCCESS,
  LOGIN_POST_FAIL
} from "../actions";

const initialState = {
  registering: false,
  loggingIn: false,
  profile: {
    // username: "",
    // password: ""
  }
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_POST_START: {
      return {
        ...state,
        loggingIn: true
      };
    }
    case LOGIN_POST_SUCCESS: {
      return {
        ...state,
        profile: action.payload,
        loggingIn: false
      };
    }
    case LOGIN_POST_FAIL: {
      return {
        ...state,
        error: action.payload,
        loggingIn: false
      };
    }
    case SIGNUP_POST_START: {
      return {
        ...state,
        registering: true
      };
    }

    case SIGNUP_POST_SUCCESS: {
      return {
        ...state,
        registering: false
      };
    }

    case SIGNUP_POST_FAIL: {
      return {
        ...state,
        registering: false,
        error: action.payload
      };
    }
  }
};

export default reducers;
