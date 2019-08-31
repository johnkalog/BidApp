import React from 'react';
import { connect } from 'react-redux';

const ShopItem = ({ product }) => {
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
        <h5>{'$' + product.value}</h5>
      </td>
      <td>
        <h5>{'$' + product.bestBid}</h5>
      </td>
      <td>
        <h5 className={classForStatus}>{status}</h5>
      </td>
    </tr>
  );
};

export default connect(
  (state, ownProps) => ({
    product: ownProps.product
  }),
  null
)(ShopItem);
