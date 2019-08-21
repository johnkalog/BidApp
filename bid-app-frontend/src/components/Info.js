import React from 'react';
import { connect } from 'react-redux';
import { changePop } from '../actions/userActions';

const Info = ({ user, changePop }) => {
  console.log('fewfewfew0', user.username);
  return (
    <div className="popup">
      <div className="popup_inner">
        <h4>{'User Info'}</h4>
        <ul class="poplist">
          <li>
            <p>{`Username: ${user.username}`}</p>
          </li>
          <li>
            <p>{'First Name: oioi'}</p>
          </li>
          <li>
            <p>{'Last Name: oioi'}</p>
          </li>
          <li>
            <p>{'Email: oioi'}</p>
          </li>
          <li>
            <p>{'Phone: oioi'}</p>
          </li>
          <li>
            <p>{'Location: oioi'}</p>
          </li>
          <li>
            <p>{'Afm: oioi'}</p>
          </li>
          <li>
            <p>{'Type: oioi'}</p>
          </li>
        </ul>
        <button
          type="button"
          class="close"
          aria-label="Close"
          onClick={() => {
            changePop();
          }}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default connect(
  (state, ownProps) => ({
    user: ownProps.user
  }),
  dispatch => ({
    changePop: changePop(dispatch)
  })
)(Info);
