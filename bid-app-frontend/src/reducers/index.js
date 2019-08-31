import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  usersData: userReducer,
  productsData: productReducer,
  messagesData: messageReducer
});
