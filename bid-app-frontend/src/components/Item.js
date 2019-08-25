import React from 'react';
import { connect } from 'react-redux';
import history from '../history';

const Item = ({ productName, bestBid }) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="single_product_item" onClick={() => history.push('single')}>
        <img src={require('./img/product/product_1.png')} alt="" />
        <div className="single_product_text">
          <h4>{productName}</h4>
          <h3>{bestBid}</h3>
          <a href="#" className="add_cart">
            Bid It
            <i className="ti-heart" />
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
