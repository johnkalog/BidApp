import React from 'react';
import { connect } from 'react-redux';
import SearchField from 'react-search-field';
import Item from './Item';
import { showCategory, getSearchedProducts } from '../actions/productActions';
import { createTheOptions } from '../actions/categorieActions';

const ItemsList = ({
  products,
  categories,
  showCategory,
  getSearchedProducts
}) => {
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
                      {categories.map(item => (
                        <div>
                          <li>
                            <a href="#" onClick={() => showCategory(item.name)}>
                              {item.name}
                            </a>
                          </li>
                          {item.show
                            ? item.childs.map(child => (
                                <li>
                                  <a
                                    href="#"
                                    onClick={() => showCategory(child.name)}
                                  >
                                    &nbsp;&nbsp;&nbsp;&nbsp;{child.name}
                                  </a>
                                </li>
                              ))
                            : ''}
                        </div>
                      ))}
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
                      <SearchField
                        placeholder="Search..."
                        classNames="test-class"
                        onEnter={event => {
                          getSearchedProducts(event);
                        }}
                        onSearchClick={event => {
                          getSearchedProducts(event);
                        }}
                      />
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
    products: state.productsData.products,
    categories: state.categoriesData.categories
  }),
  dispatch => ({
    showCategory: showCategory(dispatch),
    getSearchedProducts: getSearchedProducts(dispatch)
  })
)(ItemsList);
