import axios from 'axios';
import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  GET_PRODUCT,
  NEW_AUCTION
} from './types';

export const getProducts = dispatch => () => {
  const result = axios
    .get('http://localhost:8080/api/products/all')
    .then(result => {
      dispatch({
        type: GET_PRODUCTS,
        payload: result.data
      });
    });
};

export const newAuction = dispatch => theNewAuction => {
  axios
    .post('http://localhost:8080/api/products', theNewAuction)
    .then(result => console.log(result.data));
};

export const getProduct = dispatch => id => {
  console.log('ddddddddddddfqwfweew', id);
  const result = axios
    .get(`http://localhost:8080/api/products/${id}`)
    .then(result => {
      dispatch({
        type: GET_PRODUCT,
        payload: result.data
      });
    });
};
