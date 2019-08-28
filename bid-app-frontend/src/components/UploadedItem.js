import React from 'react';
import { connect } from 'react-redux';

const UploadedItem = ({ product }) => {
  const status = product.active ? 'Active' : 'Ended';
  const classForStatus = status === 'Active' ? 'green' : 'red';
  return (
    <tr>
      <td>
        <div className="media">
          <div className="d-flex">
            <img
              src={require('./img/product/product_1.png')}
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
        <h5>$360.00</h5>
      </td>
      <td>
        <h5>{'$' + product.bestBid}</h5>
      </td>
      <td>
        <h5 className={classForStatus}>{status}</h5>
      </td>
      <td>
        <div className="product_count">
          <button
            className="genric-btn danger-border circle"
            // onClick={() => deleteUser(user.id)}
            title="You can delete it only if status"
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
    product: ownProps.product
  }),
  null
)(UploadedItem);
