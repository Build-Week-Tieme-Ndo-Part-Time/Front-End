import {
  SIGNUP_POST_START,
  SIGNUP_POST_SUCCESS,
  SIGNUP_POST_FAIL,
  LOGIN_POST_START,
  LOGIN_POST_SUCCESS,
  LOGIN_POST_FAIL,
  START_FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_CLIENT,
  EDIT_CLIENT,
  DELETE_CLIENT
} from "../actions/index";

const initialState = {
  registering: false,
  loggingIn: false,
  profile: {
    // username: "",
    // password: ""
  },
  clients: [],
  isFetching: false,
  error: ''
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    // CLIENT REDUCER
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        clients: action.payload
      };

    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    case ADD_CLIENT:
      return {
        ...state,
        clients: [...state.clients, action.payload]
      };

    case EDIT_CLIENT:
      return {
        ...state,
        clients: state.clients.map(item => {
          if(item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        })
      };

    case DELETE_CLIENT:
      return {
        ...state,
        clients: [
          ...state.categories.filter((item, index) => {
            return item !== action.payload;
          })
        ]
      };

    // LOGIN REDUCER
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

    default:

      return state;

  }
};
