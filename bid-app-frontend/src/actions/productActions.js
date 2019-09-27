import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import Nodinatim from 'nodinatim';

import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  GET_PRODUCT,
  NEW_AUCTION,
  INPUT_CLEAR,
  ERROR_BID,
  AUCTION_ERROR,
  DELETE_UPLOADED,
  CHANGE_UPLOAD,
  SHOW_CATEGORY,
  INIT_CATEGORIES,
  CHANGE_ONCE,
  UPDATE,
  GET_DIRECTIONS,
  EXTRA,
  CHANGE_PAGE,
  INIT_PAGE
} from './types';
import history from '../history';

export const getProducts = dispatch => page => {
  axios
    .get(`http://localhost:8080/api/products/notall/${page}`)
    .then(result => {
      dispatch({
        type: GET_PRODUCTS,
        payload: result.data
      });
      dispatch({
        type: INIT_CATEGORIES
      });
      dispatch({
        type: CHANGE_ONCE,
        payload: false
      });
      dispatch({
        type: EXTRA,
        payload: { arr: [], bonusIsHere: false }
      });
    });
};

export const getProductBonus = dispatch => (user, page) => {
  axios.get(`http://localhost:8080/api/products/notall/${page}`).then(res => {
    axios.get(`http://localhost:8080/api/bids/lsh/${user.id}`).then(result => {
      console.log(result.data);
      if (typeof result.data === 'string') {
        dispatch({
          type: GET_PRODUCTS,
          payload: res.data
        });
      } else if (Array.isArray(result.data)) {
        dispatch({
          type: GET_PRODUCTS,
          payload: res.data
        });
        dispatch({
          type: EXTRA,
          payload: { arr: result.data, bonusIsHere: true }
        });
      }
      dispatch({
        type: INIT_CATEGORIES
      });
      dispatch({
        type: CHANGE_ONCE,
        payload: false
      });
    });
  });
};

export const atActionStart = dispatch => () => {
  dispatch({
    type: INPUT_CLEAR
  });
  dispatch({
    type: AUCTION_ERROR,
    payload: ''
  });
  dispatch({
    type: UPDATE,
    payload: true
  });
};

export const newAuction = dispatch => (theNewAuction, fd) => {
  axios
    .post('http://localhost:8080/api/products/uploadImage', fd)
    .then(result => {
      theNewAuction.productImage = result.data;
      axios
        .post('http://localhost:8080/api/products', theNewAuction)
        .then(product => {
          if (typeof product.data === 'string') {
            dispatch({
              type: AUCTION_ERROR,
              payload: product.data
            });
          } else if (typeof product.data === 'object') {
            dispatch({
              type: CHANGE_UPLOAD,
              payload: true
            });
            history.push('uploaded');
          }
        });
    });
};

export const getProduct = dispatch => (id, user) => {
  axios.get(`http://localhost:8080/api/products/${id}`).then(result => {
    dispatch({
      type: GET_PRODUCT,
      payload: result.data
    });
    if (Object.keys(user).length !== 0 && user.type != 'Administrator') {
      axios.get(`http://localhost:8080/api/users/visited/${id}/${user.id}`);
    }
    const geocoder = new Nodinatim();
    geocoder.geocode(result.data.location).then(function(results) {
      dispatch({
        type: GET_DIRECTIONS,
        payload: {
          latitude: results.latitude,
          longitude: results.longitude
        }
      });
    });
    history.push('single');
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
          if (amount === undefined || amount === '') {
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
  axios
    .get(`http://localhost:8080/api/products/uploaded/${id}`)
    .then(result => {
      dispatch({
        type: GET_PRODUCTS,
        payload: result.data
      });
      dispatch({
        type: CHANGE_UPLOAD,
        payload: false
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

export const showCategory = dispatch => category => {
  axios
    .get(`http://localhost:8080/api/products/category/${category}`)
    .then(result => {
      dispatch({
        type: GET_PRODUCTS,
        payload: result.data
      });
      dispatch({
        type: SHOW_CATEGORY,
        payload: category
      });
    });
};

export const getSearchedProducts = dispatch => input => {
  axios
    .get(`http://localhost:8080/api/products/search/${input}`)
    .then(result => {
      dispatch({
        type: GET_PRODUCTS,
        payload: result.data
      });
    });
};

export const getAllProducts = dispatch => page => {
  axios
    .get(`http://localhost:8080/api/products/notAllActive/${page}`)
    .then(result => {
      dispatch({
        type: GET_PRODUCTS,
        payload: result.data
      });
      dispatch({
        type: CHANGE_ONCE,
        payload: false
      });
    });
};

const download = (filename, text) => {
  var element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  );
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

export const getTheType = (type, id, productName) => {
  const url =
    type === 'xml'
      ? `http://localhost:8080/api/products/dtd/${id}`
      : `http://localhost:8080/api/products/json/${id}`;
  axios.get(url).then(result => {
    download(`${productName}.${type}`, result.data);
  });
};

export const theUpdateAuction = dispatch => product => {
  dispatch({
    type: GET_PRODUCT,
    payload: product
  });
  dispatch({
    type: UPDATE,
    payload: false
  });
  history.push('auction');
};

export const changeThePage = dispatch => value => {
  if (value === 0) {
    dispatch({
      type: INIT_PAGE
    });
  }
  dispatch({
    type: CHANGE_PAGE,
    payload: value
  });
  dispatch({
    type: CHANGE_ONCE,
    payload: true
  });
};
