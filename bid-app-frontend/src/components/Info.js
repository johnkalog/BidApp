import React from 'react';
import { connect } from 'react-redux';
import { changePop } from '../actions/userActions';

const Info = ({ user, popUser, changePop }) => {
  const popupStatus = popUser === undefined ? false : popUser.popupStatus;
  return (
    <div>
      {popupStatus ? (
        <div className="popup">
          <div className="popup_inner">
            <h4>{'User Info'}</h4>
            <ul className="poplist">
              <li>
                <p>{`Username: ${user.username}`}</p>
              </li>
              <li>
                <p>{`First Name: ${user.firstName}`}</p>
              </li>
              <li>
                <p>{`Last Name: ${user.lastName}`}</p>
              </li>
              <li>
                <p>{`Email: ${user.email}`}</p>
              </li>
              <li>
                <p>{`Phone: ${user.phone}`}</p>
              </li>
              <li>
                <p>{`Location: ${user.location}`}</p>
              </li>
              <li>
                <p>{`Afm: ${user.afm}`}</p>
              </li>
              <li>
                <p>{`Type: ${user.type}`}</p>
              </li>
            </ul>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={() => {
                changePop(user.id);
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default connect(
  (state, ownProps) => ({
    user: ownProps.user,
    popUser: state.usersData.popups.find(item => item.id === ownProps.user.id)
  }),
  dispatch => ({
    changePop: changePop(dispatch)
  })
)(Info);
