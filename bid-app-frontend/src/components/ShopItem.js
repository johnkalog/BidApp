import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { getInbox } from '../actions/messageActions';

const ShopItem = ({ product, id, getInbox }) => {
  const status = product.active ? 'Active' : 'Ended';
  const classForStatus = status === 'Active' ? 'green' : 'red';
  const actions = !product.active ? (
    <div>
      <FontAwesomeIcon
        icon={faEnvelope}
        title="Messages"
        size="2x"
        pull="left"
        className="actions messages"
        onClick={() => getInbox(id, 'After')}
      />
    </div>
  ) : (
    ''
  );
  return (
    <tr>
      <td>
        <div className="media">
          <div className="d-flex">
            <img
              src={require(`${product.productImage}`)}
              width="150"
              height="100"
              alt=""
            />
          </div>
          <div className="media-body">
            <p>{product.productName}</p>
          </div>
        </div>
      </td>
      <td>
        <h5>{'$' + product.value}</h5>
      </td>
      <td>
        <h5>{'$' + product.bestBid}</h5>
      </td>
      <td>
        <h5 className={classForStatus}>{status}</h5>
      </td>
      <td>{actions}</td>
    </tr>
  );
};

export default connect(
  (state, ownProps) => ({
    product: ownProps.product,
    id: state.usersData.user.id
  }),
  dispatch => ({
    getInbox: getInbox(dispatch)
  })
)(ShopItem);
