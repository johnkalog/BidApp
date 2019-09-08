import axios from 'axios';

import {
  GET_MESSAGES,
  DELETE_MESSAGE,
  GET_MESSAGE,
  CHANGE_MESSAGE,
  GET_SUBJECTS,
  GET_CURRENT_PRODUCTS,
  CHANGE_INBOX,
  SHOW_MESSAGE,
  ON_NEW,
  CHANGE_MES
} from './types';
import history from '../history';

export const changeTheError = dispatch => message => {
  dispatch({
    type: CHANGE_MESSAGE,
    payload: message
  });
};

export const redirectToContact = dispatch => (id, type) => {
  dispatch({
    type: CHANGE_MESSAGE,
    payload: ''
  });
  history.push('contact');
  const url =
    type === 'Bidder'
      ? `http://localhost:8080/api/products/message/bidder/${id}`
      : `http://localhost:8080/api/products/message/seller/${id}`;
  axios.get(url).then(result => {
    dispatch({
      type: GET_CURRENT_PRODUCTS,
      payload: result.data
    });
    dispatch({
      type: GET_SUBJECTS,
      payload: result.data.map(item =>
        type === 'Bidder'
          ? `${item.ownerName}-${item.productName}`
          : `${item.bestBidderName}-${item.productName}`
      )
    });
  });
};

export const getInbox = dispatch => (id, when) => {
  axios.get(`http://localhost:8080/api/messages/inbox/${id}`).then(result => {
    dispatch({
      type: GET_MESSAGES,
      payload: { data: result.data, from: 'inbox' }
    });
    dispatch({
      type: CHANGE_INBOX,
      payload: true
    });
    dispatch({
      type: CHANGE_MES,
      payload: false
    });
    if (when === 'After') {
      history.push('messages');
    }
  });
};

export const createNewMessage = dispatch => (id, newMessage) => {
  axios.post('http://localhost:8080/api/messages', newMessage).then(result => {
    dispatch({
      type: GET_SUBJECTS,
      payload: []
    });
    dispatch({
      type: GET_CURRENT_PRODUCTS,
      payload: []
    });
    getInbox(dispatch)(id);
    history.push('messages');
  });
};

export const getSent = dispatch => id => {
  axios.get(`http://localhost:8080/api/messages/sent/${id}`).then(result => {
    dispatch({
      type: GET_MESSAGES,
      payload: { data: result.data, from: 'sent' }
    });
    dispatch({
      type: CHANGE_INBOX,
      payload: false
    });
  });
};

export const showMessage = dispatch => (message, where) => {
  if (where === 'Receiver') {
    axios
      .post(`http://localhost:8080/api/messages/readFrom${where}`, message)
      .then(result => {
        dispatch({
          type: GET_MESSAGE,
          payload: result.data
        });
        dispatch({
          type: SHOW_MESSAGE,
          payload: true
        });
        if (!message.readFromReceiver) {
          dispatch({
            type: ON_NEW
          });
        }
      });
  } else if (where === 'Sender') {
    dispatch({
      type: GET_MESSAGE,
      payload: message
    });
    dispatch({
      type: SHOW_MESSAGE,
      payload: true
    });
  }
};

export const changeShow = dispatch => () => {
  dispatch({
    type: SHOW_MESSAGE,
    payload: false
  });
};

export const deleteFromMessages = dispatch => (message, where) => {
  axios
    .post(`http://localhost:8080/api/messages/deleteFrom${where}`, message)
    .then(result => {
      dispatch({
        type: DELETE_MESSAGE,
        payload: message.id
      });
      if (where === 'Receiver' && !message.readFromReceiver) {
        dispatch({
          type: ON_NEW
        });
      }
    });
};
