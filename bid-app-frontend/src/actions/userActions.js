import axios from 'axios';
import {
  GET_USERS,
  DELETE_USER,
  GET_USER,
  CHANGE_LOGIN,
  INPUT_ERROR,
  LOGIN_MESSAGE
} from './types';

export const getUsers = dispatch => () => {
  const result = axios
    .get('http://localhost:8080/api/users/all')
    .then(result => {
      dispatch({
        type: GET_USERS,
        payload: result.data
      });
    });
};

export const changeLogin = dispatch => () => {
  dispatch({
    type: CHANGE_LOGIN
  });
};

export const inputError = dispatch => field => {
  dispatch({
    type: INPUT_ERROR,
    payload: field
  });
};

export const checkUser = dispatch => forCheckUser => {
  const result = axios
    .post('http://localhost:8080/api/users/auth', forCheckUser)
    .then(result => {
      if (typeof result.data === 'string') {
        dispatch({
          type: LOGIN_MESSAGE,
          payload: result.data
        });
      } else if (typeof result.data === 'object') {
        dispatch({
          type: GET_USER,
          payload: result.data
        });
      }
    });
};
