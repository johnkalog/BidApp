import React from 'react';
import { connect } from 'react-redux';
import history from '../history';

const Item = ({ productName, bestBid }) => {
  return (
    <div class="col-lg-4 col-sm-6">
      <div class="single_product_item" onClick={() => history.push('single')}>
        <img src={require('./img/product/product_1.png')} alt="" />
        <div class="single_product_text">
          <h4>{productName}</h4>
          <h3>{bestBid}</h3>
          <a href="#" class="add_cart">
            + add to cart
            <i class="ti-heart" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state, ownProps) => ({
    productName: ownProps.productName,
    bestBid: ownProps.bestBid
  }),
  null
)(Item);
