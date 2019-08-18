import axios from 'axios';
import { GET_USERS, DELETE_USER, GET_USER, CHANGE_LOGIN } from './types';

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
