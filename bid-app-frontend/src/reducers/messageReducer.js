import {
  GET_MESSAGES,
  DELETE_MESSAGE,
  GET_MESSAGE,
  CHANGE_MESSAGE,
  GET_SUBJECTS,
  GET_CURRENT_PRODUCTS,
  CHANGE_INBOX,
  SHOW_MESSAGE,
  ON_NEW
} from '../actions/types';

const initialState = {
  messages: [],
  message: {},
  subjects: [],
  productsForCheck: [],
  errorOnSubmit: '',
  inboxOrNot: true,
  showTheMessage: false,
  sender: '',
  unread: 0
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      let number = 0;
      action.payload.data.forEach(item => {
        if (!item.readFromReceiver) {
          number++;
        }
      });
      return {
        ...state,
        messages: action.payload.data,
        unread: action.payload.from === 'inbox' ? number : state.unread
      };

    case GET_MESSAGE:
      return {
        ...state,
        messages: state.messages.map(item =>
          item.id === action.payload.id ? action.payload : item
        ),
        message: action.payload
        // unread:
      };

    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          message => message.id !== action.payload
        )
      };
    case CHANGE_MESSAGE:
      return { ...state, errorOnSubmit: action.payload };
    case GET_SUBJECTS:
      return { ...state, subjects: action.payload };
    case GET_CURRENT_PRODUCTS:
      return { ...state, productsForCheck: action.payload };
    case CHANGE_INBOX:
      return { ...state, inboxOrNot: action.payload };
    case SHOW_MESSAGE:
      return { ...state, showTheMessage: action.payload };
    case ON_NEW:
      return { ...state, unread: state.unread - 1 };
    default:
      return state;
  }
};

export default messageReducer;
