import React from 'react';
import { connect } from 'react-redux';
import SearchField from 'react-search-field';
import Item from './Item';
import {
  showCategory,
  getSearchedProducts,
  getProducts,
  getAllProducts,
  getProductBonus,
  changeThePage
} from '../actions/productActions';
import { createTheOptions } from '../actions/categorieActions';

const ItemsList = ({
  products,
  categories,
  onceTheProducts,
  user,
  extra,
  bonusIsHere,
  page,
  showCategory,
  getSearchedProducts,
  getProducts,
  getAllProducts,
  getProductBonus,
  changeThePage
}) => {
  if (onceTheProducts) {
    if (Object.keys(user).length !== 0 && user.type === 'Administrator') {
      getAllProducts(page);
    } else {
      if (Object.keys(user).length === 0) {
        getProducts(page);
      } else {
        getProductBonus(user, page);
      }
    }
  }
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
                          <li className="change-the-bottom">
                            <a href="#" onClick={() => showCategory(item.name)}>
                              {item.name}
                            </a>
                          </li>
                          {item.show
                            ? item.childs.map(child => (
                                <li className="li-bit-near">
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
                    <div className="single_product_menu d-flex">
                      <span className="point" onClick={() => changeThePage(0)}>
                        First
                      </span>
                    </div>
                    <div className="single_product_menu d-flex">
                      {page != 0 ? (
                        <span
                          className="point"
                          onClick={() => changeThePage(-1)}
                        >
                          Previous
                        </span>
                      ) : (
                        ''
                      )}
                      <span>&nbsp;/&nbsp;</span>
                      <span className="point" onClick={() => changeThePage(1)}>
                        Next
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {bonusIsHere ? <p className="center-the-sugge">Suggested</p> : ''}
              {bonusIsHere ? (
                <div className="row align-items-center latest_product_inner beTheLine">
                  {extra.map(item => (
                    <Item key={item.id} product={item} />
                  ))}
                </div>
              ) : (
                ''
              )}
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
    categories: state.categoriesData.categories,
    onceTheProducts: state.productsData.onceTheProducts,
    user: state.usersData.user,
    extra: state.productsData.extra,
    bonusIsHere: state.productsData.bonusIsHere,
    page: state.productsData.page
  }),
  dispatch => ({
    showCategory: showCategory(dispatch),
    getSearchedProducts: getSearchedProducts(dispatch),
    getProducts: getProducts(dispatch),
    getAllProducts: getAllProducts(dispatch),
    getProductBonus: getProductBonus(dispatch),
    changeThePage: changeThePage(dispatch)
  })
)(ItemsList);
