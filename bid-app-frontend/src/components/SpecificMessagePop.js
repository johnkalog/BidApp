import React from 'react';
import { connect } from 'react-redux';
import { changeShow } from '../actions/messageActions';

const SpecificMessagePop = ({ changeShow }) => {
  return (
    <div>
      <div className="popup">
        <div className="popup_inner"></div>
        <button
          type="button"
          className="close-message"
          aria-label="Close"
          onClick={() => {
            changeShow();
          }}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default connect(
  null,
  dispatch => ({
    changeShow: changeShow(dispatch)
  })
)(SpecificMessagePop);
