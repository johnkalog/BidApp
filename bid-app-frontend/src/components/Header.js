import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts, getProductsBidder } from '../actions/productActions';
import { logOutUser, getUsers } from '../actions/userActions';
import history from '../history';

const Header = ({
  user,
  getProducts,
  logOutUser,
  getUsers,
  getProductsBidder
}) => {
  const homeOrBid =
    Object.keys(user).length === 0 || user.status !== 'Accepted'
      ? './'
      : './home';
  const userRightUp =
    Object.keys(user).length === 0 || user.status !== 'Accepted'
      ? ''
      : user.type + ': ' + user.username;
  const logOut =
    Object.keys(user).length === 0 || user.status !== 'Accepted'
      ? ''
      : 'Log Out';
  let Contents;
  if (Object.keys(user).length === 0) {
    Contents = '';
  } else if (user.type === 'Seller') {
    Contents = (
      <li>
        <Link to="./auction" className="nav-link">
          Create Auction
        </Link>
      </li>
    );
  } else if (user.type === 'Bidder') {
    Contents = (
      <li>
        <Link
          to="./shop"
          className="nav-link"
          onClick={() => getProductsBidder(user.id)}
        >
          Shop
        </Link>
      </li>
    );
  } else if (user.type === 'Administrator') {
    Contents = (
      <li>
        <Link
          to="./users"
          className="nav-link"
          onClick={() => {
            getUsers();
          }}
        >
          Users
        </Link>
      </li>
    );
  }
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
              <img
                src={require('./images/logo.png')}
                alt="logo"
                className="logo"
                onClick={() => history.push(homeOrBid)}
              />
            </div>

            <div className=" text-center">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav mx-auto d-none d-lg-block  m-0 p-0">
                  <li>
                    <Link to={homeOrBid} className="nav-link">
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
                  {Contents}
                  <li>
                    <Link to="./contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="ml-auto w-25">
              <ul id="user">
                <li>
                  <span>{userRightUp + ' '}</span>
                </li>
                <li className="logOut" onClick={() => logOutUser()}>
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
    getUsers: getUsers(dispatch),
    getProductsBidder: getProductsBidder(dispatch)
  })
)(Header);
