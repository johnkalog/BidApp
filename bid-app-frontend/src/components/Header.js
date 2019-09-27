import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getProducts,
  getProductsBidder,
  getUploadedSeller,
  atActionStart,
  getProductBonus
} from '../actions/productActions';
import { logOutUser, getUsers } from '../actions/userActions';
import { getInbox } from '../actions/messageActions';
import { getAllProducts } from '../actions/productActions';
import history from '../history';

const Header = ({
  user,
  unread,
  timesInHeader,
  page,
  getProducts,
  logOutUser,
  getUsers,
  getProductsBidder,
  getUploadedSeller,
  atActionStart,
  getInbox,
  getAllProducts,
  getProductBonus
}) => {
  if (
    Object.keys(user).length !== 0 &&
    user.type !== 'Administrator' &&
    user.status === 'Accepted' &&
    timesInHeader
  ) {
    getInbox(user.id, 'One');
  }
  const homeOrBid =
    Object.keys(user).length === 0 || user.status !== 'Accepted'
      ? './'
      : './products';
  const userRightUp =
    Object.keys(user).length === 0 || user.status !== 'Accepted'
      ? ''
      : user.type + ': ' + user.username;
  const logOut =
    Object.keys(user).length === 0 || user.status !== 'Accepted'
      ? ''
      : 'Log Out';
  const GoToMessages =
    Object.keys(user).length === 0 ||
    user.type === 'Administrator' ||
    user.status !== 'Accepted' ? (
      ''
    ) : (
      <li>
        <Link
          to="./messages"
          className="nav-link"
          onClick={() => getInbox(user.id)}
        >
          Messages{unread !== 0 ? <span class="badge">{unread}</span> : ''}
        </Link>
      </li>
    );
  let FirstContent = '';
  let SecondContent = '';
  let ThirdContent = '';
  if (Object.keys(user).length === 0) {
    FirstContent = '';
    SecondContent = '';
    ThirdContent = '';
  } else if (user.status === 'Accepted') {
    if (user.type === 'Seller') {
      FirstContent = (
        <li>
          <Link
            to="./uploaded"
            className="nav-link"
            onClick={() => getUploadedSeller(user.id)}
          >
            Uploaded
          </Link>
        </li>
      );
      SecondContent = (
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
      ThirdContent = (
        <li>
          <Link
            to="./auction"
            className="nav-link"
            onClick={() => atActionStart()}
          >
            Create Auction
          </Link>
        </li>
      );
    } else if (user.type === 'Bidder') {
      FirstContent = (
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
      FirstContent = (
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
                  {Object.keys(user).length === 0 ||
                  user.status !== 'Accepted' ? (
                    <li>
                      <Link to={homeOrBid} className="nav-link">
                        Home
                      </Link>
                    </li>
                  ) : (
                    ''
                  )}
                  <li>
                    <Link
                      to="./products"
                      className="nav-link"
                      onClick={() => {
                        if (
                          Object.keys(user).length !== 0 &&
                          user.type === 'Administrator'
                        ) {
                          getAllProducts(page);
                        } else {
                          if (Object.keys(user).length === 0) {
                            getProducts(page);
                          } else {
                            getProductBonus(user, page);
                          }
                        }
                      }}
                    >
                      Products
                    </Link>
                  </li>
                  {FirstContent}
                  {SecondContent}
                  {ThirdContent}
                  {GoToMessages}
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
    user: state.usersData.user,
    unread: state.messagesData.unread,
    timesInHeader: state.messagesData.timesInHeader,
    page: state.productsData.page
  }),
  dispatch => ({
    getProducts: getProducts(dispatch),
    logOutUser: logOutUser(dispatch),
    getUsers: getUsers(dispatch),
    getProductsBidder: getProductsBidder(dispatch),
    getUploadedSeller: getUploadedSeller(dispatch),
    atActionStart: atActionStart(dispatch),
    getInbox: getInbox(dispatch),
    getAllProducts: getAllProducts(dispatch),
    getProductBonus: getProductBonus(dispatch)
  })
)(Header);
