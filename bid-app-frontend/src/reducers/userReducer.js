import {
  GET_USERS,
  DELETE_USER,
  GET_USER,
  CHANGE_LOGIN,
  INPUT_ERROR,
  LOGIN_MESSAGE,
  SIGNUP_MESSAGE,
  CHANGE_STATUS,
  CHANGE_POP,
  POP_INIT,
  CHANGE_RELOAD
} from '../actions/types';

const initialState = {
  users: [],
  user: {},
  login: true, //Log In or Sign Up
  errors: {
    //red behind fields
    username: false,
    password: false,
    re_type: false
  },
  loginMessage: '',
  signUpMessage: '',
  popups: [], //for controlling Info at each user
  forUserAppear: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };

    case GET_USER:
      let appear = false;
      if (action.payload.type === 'Administrator') {
        appear = true;
      }
      return {
        ...state,
        user: action.payload,
        errors: {
          username: false,
          password: false,
          re_type: false
        },
        loginMessage: '',
        signUpMessage: '',
        forUserAppear: appear
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
        popups: state.popups.filter(item => item.id !== action.payload)
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
    case POP_INIT:
      return {
        ...state,
        popups: state.users.map(item => ({ id: item.id, popupStatus: false }))
      };
    case CHANGE_POP:
      return {
        ...state,
        popups: state.popups.map(item =>
          item.id === action.payload
            ? { ...item, popupStatus: !item.popupStatus }
            : item
        )
      };
    case CHANGE_RELOAD:
      return {
        ...state,
        forUserAppear: false
      };
    default:
      return state;
  }
};

export default userReducer;
