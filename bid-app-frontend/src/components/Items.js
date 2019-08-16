import React from 'react';
import { connect } from 'react-redux';

const Items = ({ users }) => {
  console.log(users);
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="left-sidebar">
                <h2>Category</h2>
                <div className="panel-group category-products" id="accordian">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordian"
                          href="#sportswear"
                        >
                          <span className="badge pull-right">
                            <i className="fa fa-plus" />
                          </span>
                          Sportswear
                        </a>
                      </h4>
                    </div>
                    <div id="sportswear" className="panel-collapse collapse">
                      <div className="panel-body">
                        <ul>
                          <li>
                            <a href="">Nike </a>
                          </li>
                          <li>
                            <a href="">Under Armour </a>
                          </li>
                          <li>
                            <a href="">Adidas </a>
                          </li>
                          <li>
                            <a href="">Puma</a>
                          </li>
                          <li>
                            <a href="">ASICS </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordian"
                          href="#mens"
                        >
                          <span className="badge pull-right">
                            <i className="fa fa-plus" />
                          </span>
                          Mens
                        </a>
                      </h4>
                    </div>
                    <div id="mens" className="panel-collapse collapse">
                      <div className="panel-body">
                        <ul>
                          <li>
                            <a href="">Fendi</a>
                          </li>
                          <li>
                            <a href="">Guess</a>
                          </li>
                          <li>
                            <a href="">Valentino</a>
                          </li>
                          <li>
                            <a href="">Dior</a>
                          </li>
                          <li>
                            <a href="">Versace</a>
                          </li>
                          <li>
                            <a href="">Armani</a>
                          </li>
                          <li>
                            <a href="">Prada</a>
                          </li>
                          <li>
                            <a href="">Dolce and Gabbana</a>
                          </li>
                          <li>
                            <a href="">Chanel</a>
                          </li>
                          <li>
                            <a href="">Gucci</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordian"
                          href="#womens"
                        >
                          <span className="badge pull-right">
                            <i className="fa fa-plus" />
                          </span>
                          Womens
                        </a>
                      </h4>
                    </div>
                    <div id="womens" className="panel-collapse collapse">
                      <div className="panel-body">
                        <ul>
                          <li>
                            <a href="">Fendi</a>
                          </li>
                          <li>
                            <a href="">Guess</a>
                          </li>
                          <li>
                            <a href="">Valentino</a>
                          </li>
                          <li>
                            <a href="">Dior</a>
                          </li>
                          <li>
                            <a href="">Versace</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="#">Kids</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="#">Fashion</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="#">Households</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="#">Interiors</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="#">Clothing</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="#">Bags</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="#">Shoes</a>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="brands_products">
                  <h2>Brands</h2>
                  <div className="brands-name">
                    <ul className="nav nav-pills nav-stacked">
                      <li>
                        <a href="">
                          {' '}
                          <span className="pull-right">(50)</span>Acne
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {' '}
                          <span className="pull-right">(56)</span>Grüne Erde
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {' '}
                          <span className="pull-right">(27)</span>Albiro
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {' '}
                          <span className="pull-right">(32)</span>Ronhill
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {' '}
                          <span className="pull-right">(5)</span>Oddmolly
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {' '}
                          <span className="pull-right">(9)</span>Boudestijn
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {' '}
                          <span className="pull-right">(4)</span>Rösch creative
                          culture
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="price-range">
                  <h2>Price Range</h2>
                  <div className="well">
                    <input
                      type="text"
                      className="span2"
                      value=""
                      data-slider-min="0"
                      data-slider-max="600"
                      data-slider-step="5"
                      data-slider-value="[250,450]"
                      id="sl2"
                    />
                    <br />
                    <b>$ 0</b> <b className="pull-right">$ 600</b>
                  </div>
                </div>

                <div className="shipping text-center">
                  <img src={require('./images/home/shipping.jpg')} alt="" />
                </div>
              </div>
            </div>

            <div className="col-sm-9 padding-right">
              <div className="features_items">
                <h2 className="title text-center">Features Items</h2>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img
                          src={require('./images/shop/product12.jpg')}
                          alt=""
                        />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img
                          src={require('./images/shop/product11.jpg')}
                          alt=""
                        />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img
                          src={require('./images/shop/product10.jpg')}
                          alt=""
                        />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img
                          src={require('./images/shop/product9.jpg')}
                          alt=""
                        />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                      <img
                        src={require('./images/home/new.png')}
                        className="new"
                        alt=""
                      />
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img
                          src={require('./images/shop/product8.jpg')}
                          alt=""
                        />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                      <img
                        src={require('./images/home/sale.png')}
                        className="new"
                        alt=""
                      />
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img
                          src={require('./images/shop/product7.jpg')}
                          alt=""
                        />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img
                          src={require('./images/home/product6.jpg')}
                          alt=""
                        />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img
                          src={require('./images/home/product5.jpg')}
                          alt=""
                        />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img
                          src={require('./images/home/product4.jpg')}
                          alt=""
                        />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img
                          src={require('./images/home/product3.jpg')}
                          alt=""
                        />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img
                          src={require('./images/home/product2.jpg')}
                          alt=""
                        />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img
                          src={require('./images/home/product1.jpg')}
                          alt=""
                        />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <ul className="pagination">
                  <li className="active">
                    <a href="">1</a>
                  </li>
                  <li>
                    <a href="">2</a>
                  </li>
                  <li>
                    <a href="">3</a>
                  </li>
                  <li>
                    <a href="">&raquo;</a>
                  </li>
                </ul>
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
    users: state.usersData.users
  }),
  null
)(Items);
