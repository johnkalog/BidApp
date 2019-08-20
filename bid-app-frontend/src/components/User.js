import React from 'react';
import { connect } from 'react-redux';
import { deleteUser, changeStatus } from '../actions/userActions';

const User = ({ user, deleteUser, changeStatus }) => {
  return (
    <tr>
      <td>
        <div class="media">
          <div class="media-body">
            <p>{user.username}</p>
          </div>
        </div>
      </td>
      <td>
        <h5>{user.status}</h5>
      </td>
      <td>
        <div class="product_count">
          <button
            class="genric-btn info-border circle"
            onClick={() => changeStatus(user)}
          >
            Accept
          </button>
        </div>
      </td>

      <td>
        <div class="product_count">
          <button
            class="genric-btn danger-border circle"
            onClick={() => deleteUser(user.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default connect(
  (state, ownProps) => ({
    user: ownProps.user
  }),
  dispatch => ({
    deleteUser: deleteUser(dispatch),
    changeStatus: changeStatus(dispatch)
  })
)(User);
