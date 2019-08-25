import React from 'react';
import { connect } from 'react-redux';
import { deleteUser, changeStatus, changePop } from '../actions/userActions';
import Info from './Info';

const User = ({ user, deleteUser, changeStatus, changePop }) => {
  return (
    <tr className="shipping_area">
      <td>
        <div className="media">
          <div className="media-body">
            <p>{user.username}</p>
          </div>
        </div>
      </td>
      <td>
        <h5>{user.status}</h5>
      </td>
      <td>
        <div className="media">
          <div className="media-body">
            <p>{user.type}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="product_count">
          <button
            className="genric-btn success-border circle"
            onClick={() => changeStatus(user, 'Accepted')}
          >
            Accept
          </button>
        </div>
      </td>
      <td>
        <div className="product_count">
          <button
            className="genric-btn warning-border circle"
            onClick={() => changeStatus(user, 'Blocked')}
          >
            Block
          </button>
        </div>
      </td>
      <td>
        <div className="product_count">
          <button
            className="genric-btn danger-border circle"
            onClick={() => deleteUser(user.id)}
          >
            Delete
          </button>
        </div>
      </td>
      <td>
        <div className="product_count">
          <button
            className="genric-btn info-border circle"
            onClick={() => changePop(user.id)}
          >
            Show
          </button>
        </div>
      </td>
      <td />

      <Info user={user} />
    </tr>
  );
};

export default connect(
  (state, ownProps) => ({
    user: ownProps.user
  }),
  dispatch => ({
    deleteUser: deleteUser(dispatch),
    changeStatus: changeStatus(dispatch),
    changePop: changePop(dispatch)
  })
)(User);
