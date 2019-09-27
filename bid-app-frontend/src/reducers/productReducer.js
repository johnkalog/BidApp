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
  UPDATE,
  GET_DIRECTIONS,
  EXTRA,
  CHANGE_PAGE,
  INIT_PAGE
} from '../actions/types';

const initialState = {
  products: [],
  extra: [],
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
  newOrUpdate: true,
  latitude: 0,
  longitude: 0,
  bonusIsHere: false,
  page: 0
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
    case GET_DIRECTIONS:
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude
      };
    case EXTRA:
      return {
        ...state,
        extra: action.payload.arr,
        bonusIsHere: action.payload.bonusIsHere
      };
    case CHANGE_PAGE:
      return { ...state, page: state.page + action.payload };
    case INIT_PAGE:
      return { ...state, page: 0 };
    default:
      return state;
  }
};

export default productReducer;
