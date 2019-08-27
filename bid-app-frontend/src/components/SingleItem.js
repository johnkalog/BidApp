import React from 'react';
import { connect } from 'react-redux';
import { bidIt } from '../actions/productActions';

const SingleItem = ({ product, user, message, bidIt }) => {
  let bid;
  return (
    <div>
      <div className="product_image_area section_padding">
        <div className="container container2">
          <div className="row s_product_inner justify-content-between">
            <div className="col-lg-7 col-xl-7">
              <div className="product_slider_img">
                <div id="vertical">
                  <div data-thumb="img/product/single-product/product_1.png">
                    <img
                      src={require('./img/product/single-product/product_1.png')}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-4">
              <div className="s_product_text">
                <h3>{product.productName}</h3>
                <ul className="list">
                  <li>
                    <a className="active" href="#">
                      <span>Current Bid</span> :{' '}
                      <span>
                        <h2>{`$${product.bestBid}`}</h2>{' '}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="active" href="#">
                      <span>Category</span> : {product.category}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {' '}
                      <span>Status</span> : In Stock
                    </a>
                  </li>
                </ul>
                <p>{product.description}</p>
                <div className="card_area d-flex justify-content-between align-items-center">
                  <input
                    className="bid"
                    type="number"
                    placeholder={`$${product.bestBid + 1}`}
                    onChange={event => {
                      bid = event.currentTarget.value;
                    }}
                  ></input>
                  <button
                    className="btn_3 bid_purple"
                    onClick={event => {
                      event.preventDefault();
                      bidIt(product, user, bid);
                    }}
                  >
                    Bid It
                  </button>
                </div>
                <div className="message_bid_it">{message}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  state => ({
    product: state.productsData.product,
    user: state.usersData.user,
    message: state.productsData.message
  }),
  dispatch => ({
    bidIt: bidIt(dispatch)
  })
)(SingleItem);
