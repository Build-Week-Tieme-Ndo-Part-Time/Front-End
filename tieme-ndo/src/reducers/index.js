import {
  SIGNUP_POST_START,
  SIGNUP_POST_SUCCESS,
  SIGNUP_POST_FAIL,
  LOGIN_POST_START,
  LOGIN_POST_SUCCESS,
  LOGIN_POST_FAIL,
  GET_CLIENT_START,
  GET_CLIENT_SUCCESS,
  GET_CLIENT_FAILED,
  ADD_CLIENT_START,
  ADD_CLIENT_SUCCESS,
  ADD_CLIENT_FAILED,
  GET_SINGLE_CLIENT_START,
  GET_SINGLE_CLIENT_SUCCESS,
  GET_SINGLE_CLIENT_FAILED,
  DELETE_CLIENT_START,
  DELETE_CLIENT_SUCCESS,
  DELETE_CLIENT_FAILED
} from "../actions";

const initialState = {
  registering: false,
  err: '',
  loggingIn: false,
  singleClient: null,
  clients: []
};

export default (state = initialState, action) => {
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

    case GET_CLIENT_START: {
      return {
        ...state,
        isLoading: true
      }
    }

    case GET_CLIENT_SUCCESS: {
      return {
        ...state,
        clients: action.payload,
        isLoading: false
      }
    }

    case GET_CLIENT_FAILED: {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    }

    case ADD_CLIENT_START: {
      return {
        ...state,
        isLoading: true
      }
    }

    case ADD_CLIENT_SUCCESS: {
      return {
        ...state,
        clients: action.payload,
        isLoading: false
      }
    }

    case ADD_CLIENT_FAILED: {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    }

    case GET_SINGLE_CLIENT_START: {
      return {
        ...state,
        isLaoding: true
      }
    }

    case GET_SINGLE_CLIENT_SUCCESS: {
      return {
        ...state,
        isLaoding: false,
        singleClient: action.payload
      }
    }

    case GET_SINGLE_CLIENT_FAILED: {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    }

    case DELETE_CLIENT_SUCCESS:
      return {
        ...state,
        recipes: action.payload
      };

    default:
      return state;

  }
};
