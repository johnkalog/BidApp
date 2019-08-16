import {
  GET_USERS,
  DELETE_USER,
  GET_USER
} from "../actions/types";

const initialState = {
  users: [],
  user: {}
};

const userReducer =  (state = initialState, action) => {
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
        users: state.users.filter(
          user => user.id !== action.payload
        )
      };
    default:
      return state;
  }
}

export default userReducer;