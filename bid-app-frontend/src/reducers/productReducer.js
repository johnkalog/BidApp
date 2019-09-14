import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  GET_PRODUCT,
  NEW_AUCTION,
  INPUT_ERROR,
  INPUT_CLEAR,
  ERROR_BID,
  AUCTION_ERROR,
  DELETE_UPLOADED,
  CHANGE_ONCE,
  UPDATE
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
  },
  message: '',
  auctionError: '',
  onceTheProducts: true,
  type: '',
  newOrUpdate: true
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
        product: action.payload,
        message: ''
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
    case ERROR_BID:
      return { ...state, message: action.payload };
    case AUCTION_ERROR:
      return { ...state, auctionError: action.payload };
    case DELETE_UPLOADED:
      return {
        ...state,
        products: state.products.filter(item => item.id !== action.payload)
      };
    case CHANGE_ONCE:
      return { ...state, onceTheProducts: action.payload };
    case UPDATE:
      return { ...state, newOrUpdate: action.payload };
    default:
      return state;
  }
};

export default productReducer;
