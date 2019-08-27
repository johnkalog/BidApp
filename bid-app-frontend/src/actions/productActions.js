import axios from 'axios';
import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  GET_PRODUCT,
  NEW_AUCTION,
  INPUT_CLEAR
} from './types';

export const getProducts = dispatch => () => {
  axios.get('http://localhost:8080/api/products/all').then(result => {
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
  dispatch({
    type: INPUT_CLEAR
  });
};

export const getProduct = dispatch => id => {
  axios.get(`http://localhost:8080/api/products/${id}`).then(result => {
    dispatch({
      type: GET_PRODUCT,
      payload: result.data
    });
  });
};
