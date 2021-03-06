import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCog,
  faEnvelope,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import { deleteProduct, theUpdateAuction } from '../actions/productActions';
import { getInbox } from '../actions/messageActions';

const UploadedItem = ({
  product,
  id,
  deleteProduct,
  getInbox,
  theUpdateAuction
}) => {
  const actions =
    product.bestBidOwnerId === null ? (
      <div>
        <FontAwesomeIcon
          icon={faCog}
          title="Update"
          size="2x"
          pull="left"
          className="actions update"
          onClick={() => theUpdateAuction(product)}
        />
        <FontAwesomeIcon
          icon={faTrashAlt}
          title="Delete"
          size="2x"
          pull="right"
          className="actions delete"
          onClick={() => deleteProduct(product.id)}
        />
      </div>
    ) : !product.active ? (
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
  const status = product.active ? 'Active' : 'Ended';
  const classForStatus = status === 'Active' ? 'green' : 'red';
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
        <h5>{product.bestBidderName}</h5>
      </td>
      <td>
        <h5>{'$' + product.bestBid}</h5>
      </td>
      <td>
        <h5 className={classForStatus}>{status}</h5>
      </td>
      <td>
        <div className="product_count">{actions}</div>
      </td>
    </tr>
  );
};

export default connect(
  (state, ownProps) => ({
    product: ownProps.product,
    id: state.usersData.user.id
  }),
  dispatch => ({
    deleteProduct: deleteProduct(dispatch),
    getInbox: getInbox(dispatch),
    theUpdateAuction: theUpdateAuction(dispatch)
  })
)(UploadedItem);
