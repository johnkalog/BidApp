import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts } from '../actions/productActions';
import { logOutUser, getUsers } from '../actions/userActions';

const Header = ({ user, getProducts, logOutUser, getUsers }) => {
  const userRightUp =
    Object.keys(user).length === 0 || user.status === 'Waiting'
      ? ''
      : user.username;
  const logOut = Object.keys(user).length === 0 || user.status ? '' : 'Log Out';
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
                    <Link
                      to="./users"
                      className="nav-link"
                      onClick={() => getUsers()}
                    >
                      Users
                    </Link>
                  </li>
                  <li>
                    <Link to="./shop" className="nav-link">
                      Shop
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="ml-auto w-25">
              <ul id="user">
                <li>
                  <span>{userRightUp + ' '}</span>
                </li>
                <li class="logOut" onClick={() => logOutUser()}>
                  <span>{logOut}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default connect(
  state => ({
    user: state.usersData.user
  }),
  dispatch => ({
    getProducts: getProducts(dispatch),
    logOutUser: logOutUser(dispatch),
    getUsers: getUsers(dispatch)
  })
)(Header);
