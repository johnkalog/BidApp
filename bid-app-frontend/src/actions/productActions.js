import axios from 'axios';
import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  GET_PRODUCT,
  NEW_AUCTION,
  INPUT_CLEAR,
  ERROR_BID
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

export const bidIt = dispatch => (product, user, amount) => {
  const userId = Object.keys(user).length === 0 ? null : user.id;
  const bid = {
    offer: amount,
    productId: product.id,
    bidderId: userId
  };
  axios.post('http://localhost:8080/api/bids', bid).then(result => {
    if (typeof result.data === 'string') {
      dispatch({
        type: ERROR_BID,
        payload: result.data
      });
    } else if (typeof result.data === 'object') {
      dispatch({
        type: GET_PRODUCT,
        payload: result.data
      });
    }
  });
};
