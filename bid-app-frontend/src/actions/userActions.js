import axios from 'axios';
import {
  GET_USERS,
  DELETE_USER,
  GET_USER,
  CHANGE_LOGIN,
  INPUT_ERROR,
  LOGIN_MESSAGE,
  SIGNUP_MESSAGE
} from './types';
import history from '../history';

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
        history.push('products');
      }
    });
};

export const newUser = dispatch => theNewUser => {
  const result = axios
    .post('http://localhost:8080/api/users/new', theNewUser)
    .then(result => {
      if (result.data === '') {
        const res = axios
          .post('http://localhost:8080/api/users/', theNewUser)
          .then(res => {
            dispatch({
              type: GET_USER,
              payload: res.data
            });
            history.push('products');
          });
      } else {
        dispatch({
          type: SIGNUP_MESSAGE,
          payload: result.data
        });
      }
    });
};

export const notSamePasswords = dispatch => message => {
  dispatch({
    type: SIGNUP_MESSAGE,
    payload: message
  });
};

export const logOutUser = dispatch => () => {
  dispatch({
    type: GET_USER,
    payload: {}
  });
  history.push('/');
};
