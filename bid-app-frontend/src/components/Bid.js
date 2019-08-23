import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import { changeLogin } from '../actions/userActions';

const Bid = ({ login, changeLogin }) => {
  const forms = login ? <Login /> : <SignUp />;
  return (
    <div>
      <div className="site-wrap">
        <div className="intro-section" id="home-section">
          <div className="slide-1">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-4">
                      <h1 data-aos="fade-up" data-aos-delay="100">
                        Just Bid It
                      </h1>
                      <p
                        className="mb-4"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        Welcome to this Bid Application. Here you can explore
                        products to bid or make your own auctions. Log in as
                        User or Bidder to learn more.
                      </p>
                      <p data-aos="fade-up" data-aos-delay="300">
                        <Link
                          to="./products"
                          href="#"
                          className="btn btn-primary py-3 px-5 btn-pill"
                        >
                          Continue as guest
                        </Link>
                      </p>
                    </div>

                    <div
                      className="col-lg-5 ml-auto"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <div className="tab-content">
                        <ul className="tab-group">
                          <li
                            className={login ? 'tab active' : 'tab'}
                            onClick={() => changeLogin()}
                          >
                            <a href="#login">Log In</a>
                          </li>
                          <li
                            className={!login ? 'tab active' : 'tab'}
                            onClick={() => changeLogin()}
                          >
                            <a href="#signup">Sign Up</a>
                          </li>
                        </ul>
                        {forms}
                        <div />
                      </div>
                    </div>
                  </div>
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
  state => ({
    login: state.usersData.login
  }),
  dispatch => ({
    changeLogin: changeLogin(dispatch)
  })
)(Bid);
