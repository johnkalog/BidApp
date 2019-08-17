import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts } from '../actions/productActions';

const Header = ({ getProducts }) => {
  return (
    <div>
      <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>
      </div>
      <header
        className="site-navbar py-4 js-sticky-header site-navbar-target"
        role="banner"
        // style="background-color:#333333;"
      >
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <div>
              <img src={require('./images/logo.png')} alt="logo" />
            </div>

            <div className=" text-center">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav mx-auto d-none d-lg-block  m-0 p-0">
                  <li>
                    <Link to="./" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="./products"
                      className="nav-link"
                      onClick={() => getProducts()}
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <a href="#programs-section" className="nav-link">
                      Programs
                    </a>
                  </li>
                  <li>
                    <a href="#teachers-section" className="nav-link">
                      Teachers
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default connect(
  null,
  dispatch => ({
    getProducts: getProducts(dispatch)
  })
)(Header);
