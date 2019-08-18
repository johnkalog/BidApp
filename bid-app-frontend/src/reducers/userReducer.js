import {
  GET_USERS,
  DELETE_USER,
  GET_USER,
  CHANGE_LOGIN,
  INPUT_ERROR
} from '../actions/types';

const initialState = {
  users: [],
  user: {},
  login: true,
  errors: {
    username: false,
    password: false,
    re_type: false
  }
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
        user: action.payload
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
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
    default:
      return state;
  }
};

export default userReducer;
