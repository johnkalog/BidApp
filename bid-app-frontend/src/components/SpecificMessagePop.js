import React from 'react';
import { connect } from 'react-redux';
import { changeShow } from '../actions/messageActions';

const SpecificMessagePop = ({ message, inboxOrNot, changeShow }) => {
  const first = inboxOrNot ? 'From' : 'To';
  return (
    <div>
      <div className="popup">
        <div className="popup_inner">
          <h4>{'Details'}</h4>
          <ul className="poplist">
            <li>
              <p>{`${first}: ${message.subject.split('-')[0]}`}</p>
            </li>
            <li>
              <p>{`Subject: ${message.subject}`}</p>
            </li>
            <li>
              <p>{`Message: ${message.message}`}</p>
            </li>
          </ul>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={() => {
              changeShow();
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(
  state => ({
    message: state.messagesData.message,
    inboxOrNot: state.messagesData.inboxOrNot
  }),
  dispatch => ({
    changeShow: changeShow(dispatch)
  })
)(SpecificMessagePop);
