import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';

import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  GET_PRODUCT,
  NEW_AUCTION,
  INPUT_CLEAR,
  ERROR_BID,
  AUCTION_ERROR,
  DELETE_UPLOADED
} from './types';

export const getProducts = dispatch => () => {
  axios.get('http://localhost:8080/api/products/allActive').then(result => {
    dispatch({
      type: GET_PRODUCTS,
      payload: result.data
    });
  });
};

export const newAuction = dispatch => theNewAuction => {
  axios
    .post('http://localhost:8080/api/products', theNewAuction)
    .then(result => {
      if (typeof result.data === 'string') {
        dispatch({
          type: AUCTION_ERROR,
          payload: result.data
        });
      }
      dispatch({
        type: INPUT_CLEAR
      });
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
  confirmAlert({
    title: 'You are going to bid',
    message: 'Are you sure?',
    buttons: [
      {
        label: 'No',
        onClick: () => {}
      },
      {
        label: 'Yes',
        onClick: () => {
          if (amount === undefined) {
            dispatch({
              type: ERROR_BID,
              payload: 'Please choose amount'
            });
            return;
          }
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
        }
      }
    ]
  });
};

export const getProductsBidder = dispatch => id => {
  axios.get(`http://localhost:8080/api/bids/products/${id}`).then(result => {
    dispatch({
      type: GET_PRODUCTS,
      payload: result.data
    });
  });
};

export const getUploadedSeller = dispatch => id => {
  console.log('fewewfewffew');
  axios
    .get(`http://localhost:8080/api/products/uploaded/${id}`)
    .then(result => {
      dispatch({
        type: GET_PRODUCTS,
        payload: result.data
      });
    });
};

export const deleteProduct = dispatch => id => {
  axios.post(`http://localhost:8080/api/products/delete/${id}`).then(result => {
    dispatch({
      type: DELETE_UPLOADED,
      payload: id
    });
  });
};
