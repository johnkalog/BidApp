import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { showCategory } from '../actions/productActions';

const ItemsList = ({ products, showCategory }) => {
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
                        <a href="#" onClick={() => showCategory('Frozen Fish')}>
                          Frozen Fish
                        </a>
                      </li>
                      <li>
                        <a href="#">Dried Fish</a>
                      </li>
                      <li>
                        <a href="#">Fresh Fish</a>
                      </li>
                      <li>
                        <a href="#">Meat Alternatives</a>
                      </li>
                      <li>
                        <a href="#">Meat</a>
                      </li>
                      <li>
                        <button>&nbsp;{String.fromCharCode(40)}</button>
                      </li>
                    </ul>
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
                        <span>10000 </span> Search
                      </p>
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
  dispatch => ({
    showCategory: showCategory(dispatch)
  })
)(ItemsList);
