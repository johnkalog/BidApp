import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

const ItemsList = ({ products }) => {
  return (
    <div>
      <section>
        <div className="container container3">
          <div className="row">
            <div className="col-lg-3">
              <div className="left_sidebar_area">
                <aside className="left_widgets p_filter_widgets">
                  <div className="l_w_title">
                    <h3>Browse Categories</h3>
                  </div>
                  <div className="widgets_inner">
                    <ul className="list">
                      <li>
                        <a href="#">Frozen Fish</a>
                        <span>(250)</span>
                      </li>
                      <li>
                        <a href="#">Dried Fish</a>
                        <span>(250)</span>
                      </li>
                      <li>
                        <a href="#">Fresh Fish</a>
                        <span>(250)</span>
                      </li>
                      <li>
                        <a href="#">Meat Alternatives</a>
                        <span>(250)</span>
                      </li>
                      <li>
                        <a href="#">Fresh Fish</a>
                        <span>(250)</span>
                      </li>
                      <li>
                        <a href="#">Meat Alternatives</a>
                        <span>(250)</span>
                      </li>
                      <li>
                        <a href="#">Meat</a>
                        <span>(250)</span>
                      </li>
                    </ul>
                  </div>
                </aside>

                <aside className="left_widgets p_filter_widgets">
                  <div className="l_w_title">
                    <h3>Product filters</h3>
                  </div>
                  <div className="widgets_inner">
                    <ul className="list">
                      <li>
                        <a href="#">Apple</a>
                      </li>
                      <li>
                        <a href="#">Asus</a>
                      </li>
                      <li className="active">
                        <a href="#">Gionee</a>
                      </li>
                      <li>
                        <a href="#">Micromax</a>
                      </li>
                      <li>
                        <a href="#">Samsung</a>
                      </li>
                    </ul>
                    <ul className="list">
                      <li>
                        <a href="#">Apple</a>
                      </li>
                      <li>
                        <a href="#">Asus</a>
                      </li>
                      <li className="active">
                        <a href="#">Gionee</a>
                      </li>
                      <li>
                        <a href="#">Micromax</a>
                      </li>
                      <li>
                        <a href="#">Samsung</a>
                      </li>
                    </ul>
                  </div>
                </aside>

                <aside className="left_widgets p_filter_widgets">
                  <div className="l_w_title">
                    <h3>Color Filter</h3>
                  </div>
                  <div className="widgets_inner">
                    <ul className="list">
                      <li>
                        <a href="#">Black</a>
                      </li>
                      <li>
                        <a href="#">Black Leather</a>
                      </li>
                      <li className="active">
                        <a href="#">Black with red</a>
                      </li>
                      <li>
                        <a href="#">Gold</a>
                      </li>
                      <li>
                        <a href="#">Spacegrey</a>
                      </li>
                    </ul>
                  </div>
                </aside>

                <aside className="left_widgets p_filter_widgets price_rangs_aside">
                  <div className="l_w_title">
                    <h3>Price Filter</h3>
                  </div>
                  <div className="widgets_inner">
                    <div className="range_item">
                      <input type="text" className="js-range-slider" value="" />
                      <div className="d-flex">
                        <div className="price_text">
                          <p>Price :</p>
                        </div>
                        <div className="price_value d-flex justify-content-center">
                          <input
                            type="text"
                            className="js-input-from"
                            id="amount"
                            readonly
                          />
                          <span>to</span>
                          <input
                            type="text"
                            className="js-input-to"
                            id="amount"
                            readonly
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-12">
                  <div className="product_top_bar d-flex justify-content-between align-items-center">
                    <div className="single_product_menu">
                      <p>
                        <span>10000 </span> Prodict Found
                      </p>
                    </div>
                    <div className="single_product_menu d-flex">
                      <h5>short by : </h5>
                      <select>
                        <option data-display="Select">name</option>
                        <option value="1">price</option>
                        <option value="2">product</option>
                      </select>
                    </div>
                    <div className="single_product_menu d-flex">
                      <h5>show :</h5>
                      <div className="top_pageniation">
                        <ul>
                          <li>1</li>
                          <li>2</li>
                          <li>3</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row align-items-center latest_product_inner">
                {products.map(item => (
                  <Item key={item.id} product={item} />
                ))}
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
)(ItemsList);
