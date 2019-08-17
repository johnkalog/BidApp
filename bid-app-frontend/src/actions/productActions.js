import axios from 'axios';
import { GET_PRODUCTS, DELETE_PRODUCT, GET_PRODUCT } from './types';

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
