import React from 'react';
import { connect } from 'react-redux';
import history from '../history';
import { getProduct } from '../actions/productActions';

const Item = ({ user, product, getProduct }) => {
  const action =
    Object.keys(user).length !== 0 && user.type === 'Administrator'
      ? 'Export'
      : 'Bid It';
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="single_product_item">
        <img src={require(`${product.productImage}`)} alt="" />
        <div className="single_product_text">
          <h4>{product.productName}</h4>
          <h3>{'$' + product.bestBid}</h3>
          <a
            href="#"
            className="add_cart"
            onClick={() => {
              getProduct(product.id,user);
            }}
          >
            {action}
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state, ownProps) => ({
    user: state.usersData.user,
    product: ownProps.product
  }),
  dispatch => ({
    getProduct: getProduct(dispatch)
  })
)(Item);
