import {
  GET_USERS,
  DELETE_USER,
  GET_USER,
  CHANGE_LOGIN,
  INPUT_ERROR,
  LOGIN_MESSAGE,
  SIGNUP_MESSAGE,
  CHANGE_STATUS,
  POP_INFO
} from '../actions/types';

const initialState = {
  users: [],
  user: {},
  login: true,
  errors: {
    username: false,
    password: false,
    re_type: false
  },
  loginMessage: '',
  signUpMessage: '',
  popup: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        errors: {
          username: false,
          password: false,
          re_type: false
        },
        loginMessage: '',
        signUpMessage: ''
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
        user: {}
      };
    case CHANGE_LOGIN:
      return {
        ...state,
        login: !state.login
      };
    case INPUT_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          [`${action.payload}`]: true
        }
      };
    case LOGIN_MESSAGE:
      return {
        ...state,
        loginMessage: action.payload
      };
    case SIGNUP_MESSAGE:
      return {
        ...state,
        signUpMessage: action.payload
      };
    case CHANGE_STATUS:
      return {
        ...state,
        users: state.users.map(user =>
          user.id !== action.payload.id ? user : { ...action.payload }
        )
      };
    case POP_INFO:
      return {
        ...state,
        popup: !state.popup
      };
    default:
      return state;
  }
};

export default userReducer;
