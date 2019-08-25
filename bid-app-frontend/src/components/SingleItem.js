import React from 'react';
import { connect } from 'react-redux';

const SingleItem = () => {
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
                <h3>Faded SkyBlu Denim Jeans</h3>
                <ul className="list">
                  <li>
                    <a className="active" href="#">
                      <span>Current Bid</span> :{' '}
                      <span>
                        <h2>$123</h2>{' '}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="active" href="#">
                      <span>Category</span> : Household
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {' '}
                      <span>Availibility</span> : In Stock
                    </a>
                  </li>
                </ul>
                <p>
                  First replenish living. Creepeth image image. Creeping can't,
                  won't called. Two fruitful let days signs sea together all
                  land fly subdue
                </p>
                <div className="card_area d-flex justify-content-between align-items-center">
                  <input
                    className="bid"
                    type="number"
                    placeholder="$"
                    onChange={event => {
                      bid = event.currentTarget.value;
                    }}
                  ></input>
                  <button
                    className="btn_3 bid_purple"
                    onClick={event => {
                      event.preventDefault();
                      console.log(bid);
                    }}
                  >
                    Bid It
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  null
)(SingleItem);
