import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productReducer';
import messageReducer from './messageReducer';
import categorieReducer from './categorieReducer';

export default combineReducers({
  usersData: userReducer,
  productsData: productReducer,
  messagesData: messageReducer,
  categoriesData: categorieReducer
});
