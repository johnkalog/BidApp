import React from 'react';
import { connect } from 'react-redux';

const User = ({ username, status }) => {
  return (
    <tr>
      <td>
        <div class="media">
          <div class="media-body">
            <p>{username}</p>
          </div>
        </div>
      </td>
      <td>
        <h5>{status}</h5>
      </td>
      <td>
        <div class="product_count">
          <button
            onclick="location.href=#"
            class="genric-btn info-border circle"
          >
            Accept
          </button>
        </div>
      </td>

      <td>
        <div class="product_count">
          <button
            onclick="location.href=#"
            class="genric-btn danger-border circle"
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
    username: ownProps.username,
    status: ownProps.status
  }),
  null
)(User);
