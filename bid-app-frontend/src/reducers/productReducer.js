import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  GET_PRODUCT,
  NEW_AUCTION
} from '../actions/types';

const initialState = {
  products: [],
  product: {}
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          product => product.id !== action.payload
        )
      };
    case NEW_AUCTION:
      return state;
    default:
      return state;
  }
};

export default productReducer;
