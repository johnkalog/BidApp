import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCog,
  faEnvelope,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import { deleteProduct } from '../actions/productActions';

const UploadedItem = ({ product, deleteProduct }) => {
  const actions =
    product.bestBidOwnerId === null ? (
      <div>
        <FontAwesomeIcon
          icon={faCog}
          title="Update"
          size="2x"
          pull="left"
          className="actions update"
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
        <div className="product_count">
          {actions}
          {/* <FontAwesomeIcon
            icon={faCog}
            title="Update"
            size="2x"
            pull="left"
            className="actions update"
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            title="Messages"
            size="2x"
            pull="right"
            className="actions messages"
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            title="Delete"
            size="2x"
            pull="right"
            className="actions delete"
          /> */}
        </div>
      </td>
    </tr>
  );
};

export default connect(
  (state, ownProps) => ({
    product: ownProps.product
  }),
  dispatch => ({ deleteProduct: deleteProduct(dispatch) })
)(UploadedItem);
