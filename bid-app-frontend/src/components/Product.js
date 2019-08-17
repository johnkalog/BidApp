import React from 'react';
import { connect } from 'react-redux';

const Product = () => {
  return (
    <div class="col-lg-4 col-sm-6">
      <div class="single_product_item">
        <img src="img/product/product_1.png" alt="" />
        <div class="single_product_text">
          <h4>Quartz Belt Watch</h4>
          <h3>$150.00</h3>
          <a href="#" class="add_cart">
            + add to cart<i class="ti-heart" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  null
)(Product);
