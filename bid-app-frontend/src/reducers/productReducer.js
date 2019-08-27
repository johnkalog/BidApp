import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  GET_PRODUCT,
  NEW_AUCTION,
  INPUT_ERROR,
  INPUT_CLEAR
} from '../actions/types';

const initialState = {
  products: [],
  product: {},
  errors: {
    productName: false,
    category: false,
    firstBid: false,
    location: false,
    description: false,
    productImage: false,
    expirationDate: false
  }
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        product: {}
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
      return { ...state };
    case INPUT_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          [`${action.payload}`]: true
        }
      };
    case INPUT_CLEAR:
      return {
        ...state,
        errors: {
          productName: false,
          category: false,
          firstBid: false,
          location: false,
          description: false,
          productImage: false,
          expirationDate: false
        }
      };
    default:
      return state;
  }
};

export default productReducer;
