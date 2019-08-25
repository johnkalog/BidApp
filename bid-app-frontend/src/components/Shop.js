import React from 'react';
import { connect } from 'react-redux';

const Shop = ({ products }) => {
  console.log(products);
  return (
    <div>
      <section className="cart_area padding_top">
        <div className="container container2">
          <div className="cart_inner">
            <div className="table-responsive">
              <table className="table">
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
                  <tr className="bottom_button">
                    <td>
                      <a className="btn_1" href="#">
                        Update Cart
                      </a>
                    </td>
                    <td />
                    <td />
                    <td>
                      <div className="cupon_text float-right">
                        <a className="btn_1" href="#">
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
              <div className="checkout_btn_inner float-right">
                <a className="btn_1" href="#">
                  Continue Shopping
                </a>
                <a className="btn_1 checkout_btn_1" href="#">
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
