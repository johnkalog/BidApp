import axios from 'axios';
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
} from './types';
import history from '../history';

export const getUsers = dispatch => () => {
  axios.get('http://localhost:8080/api/users/all').then(result => {
    dispatch({
      type: GET_USERS,
      payload: result.data
    });
    dispatch({
      type: POP_INIT
    });
    dispatch({
      type: CHANGE_RELOAD
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
  axios
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
        if (result.data.status === 'Accepted') {
          if (result.data.type === 'Administrator') {
            history.push('users');
          } else {
            history.push('home');
          }
        } else {
          history.push('waiting');
        }
      }
    });
};

export const newUser = dispatch => theNewUser => {
  axios.post('http://localhost:8080/api/users/new', theNewUser).then(result => {
    if (result.data === '') {
      axios.post('http://localhost:8080/api/users/', theNewUser).then(res => {
        // dispatch({
        //   type: GET_USER,
        //   payload: res.data
        // });
        history.push('waiting');
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
  dispatch({
    type: CHANGE_RELOAD
  });
  history.push('/');
};

export const deleteUser = dispatch => id => {
  axios.delete(`http://localhost:8080/api/users/${id}`);
  dispatch({
    type: DELETE_USER,
    payload: id
  });
};

export const changeStatus = dispatch => (user, newStatus) => {
  const newUser = { ...user, status: newStatus };
  axios.post('http://localhost:8080/api/users/', newUser);
  dispatch({
    type: CHANGE_STATUS,
    payload: newUser
  });
};

export const changePop = dispatch => id => {
  dispatch({
    type: CHANGE_POP,
    payload: id
  });
};
