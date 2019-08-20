import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';

const Shop = ({ products }) => {
  console.log(products);
  return (
    <div>
      <section class="cart_area padding_top">
        <div class="container container2">
          <div class="cart_inner">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Your Bid</th>
                    <th scope="col">Best Bid</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="media">
                        <div class="d-flex">
                          <img
                            src={require('./img/product/product_1.png')}
                            width="150"
                            height="100"
                            alt=""
                          />
                        </div>
                        <div class="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>
                    <td>
                      <h5>$720.00</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="media">
                        <div class="d-flex">
                          <img
                            src={require('./img/product/product_1.png')}
                            width="150"
                            height="100"
                            alt=""
                          />
                        </div>
                        <div class="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>

                    <td>
                      <h5>$720.00</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="media">
                        <div class="d-flex">
                          <img
                            src={require('./img/product/product_1.png')}
                            width="150"
                            height="100"
                            alt=""
                          />
                        </div>
                        <div class="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>

                    <td>
                      <h5>$720.00</h5>
                    </td>
                  </tr>
                  <tr class="bottom_button">
                    <td>
                      <a class="btn_1" href="#">
                        Update Cart
                      </a>
                    </td>
                    <td />
                    <td />
                    <td>
                      <div class="cupon_text float-right">
                        <a class="btn_1" href="#">
                          Close Coupon
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td />
                    <td>
                      <h5>Subtotal</h5>
                    </td>
                    <td>
                      <h5>$2160.00</h5>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="checkout_btn_inner float-right">
                <a class="btn_1" href="#">
                  Continue Shopping
                </a>
                <a class="btn_1 checkout_btn_1" href="#">
                  Proceed to checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default connect(
  state => ({
    products: state.productsData.products
  }),
  null
)(Shop);
