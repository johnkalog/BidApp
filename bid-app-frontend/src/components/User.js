import React from 'react';
import { connect } from 'react-redux';
import { deleteUser, changeStatus, changePop } from '../actions/userActions';
import Info from './Info';

const User = ({ user, popup, deleteUser, changeStatus, changePop }) => {
  return (
    <tr class="shipping_area">
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
            class="genric-btn success-border circle"
            onClick={() => changeStatus(user, 'Accepted')}
          >
            Accept
          </button>
        </div>
      </td>
      <td>
        <div class="product_count">
          <button
            class="genric-btn warning-border circle"
            onClick={() => changeStatus(user, 'Blocked')}
          >
            Block
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
      <td>
        <div class="product_count">
          <button
            class="genric-btn info-border circle"
            onClick={() => changePop()}
          >
            Show
          </button>
        </div>
      </td>
      <td />
      {popup ? <Info user={user}/> : null}
    </tr>
  );
};

export default connect(
  (state, ownProps) => ({
    user: ownProps.user,
    popup: state.usersData.popup
  }),
  dispatch => ({
    deleteUser: deleteUser(dispatch),
    changeStatus: changeStatus(dispatch),
    changePop: changePop(dispatch)
  })
)(User);
