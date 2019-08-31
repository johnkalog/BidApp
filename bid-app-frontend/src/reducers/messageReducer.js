import { GET_MESSAGES, DELETE_MESSAGE, GET_MESSAGE } from '../actions/types';

const initialState = {
  users: [],
  user: {}
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        users: action.payload
      };

    case GET_MESSAGE:
      return {
        ...state,
        user: action.payload
      };

    case DELETE_MESSAGE:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    default:
      return state;
  }
};

export default messageReducer;
