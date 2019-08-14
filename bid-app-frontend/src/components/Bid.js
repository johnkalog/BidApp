import React from 'react';
// import './general.css';
// import './fonts/icomoon/style.css';

// import './css/bootstrap.min.css';
// import './css/jquery-ui.css';
// import './css/owl.carousel.min.css';
// import './css/owl.theme.default.min.css';

// import './css/jquery.fancybox.min.css';

// import './css/bootstrap-datepicker.css';

// import './fonts/flaticon/font/flaticon.css';

// //import './css/aos.css';

// import './css/style.css';

// import './style2.css';

const Bid = () => {
  return (
    <div>
      <div classNameName="site-wrap">
        <div classNameName="site-mobile-menu site-navbar-target">
          <div classNameName="site-mobile-menu-header">
            <div classNameName="site-mobile-menu-close mt-3">
              <span classNameName="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div classNameName="site-mobile-menu-body" />
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
                    <a href="./index.html" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="./products.html" className="nav-link">
                      Products
                    </a>
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
      <div className="intro-section" id="home-section">
        <div
          className="slide-1"
          // style="background-image: url('images/hero_1.jpg');"
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-4">
                    <h1 data-aos="fade-up" data-aos-delay="100">
                      Learn From The Expert
                    </h1>
                    <p className="mb-4" data-aos="fade-up" data-aos-delay="200">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime ipsa nulla sed quis rerum amet natus quas
                      necessitatibus.
                    </p>
                    <p data-aos="fade-up" data-aos-delay="300">
                      <a
                        href="#"
                        className="btn btn-primary py-3 px-5 btn-pill"
                      >
                        Admission Now
                      </a>
                    </p>
                  </div>

                  <div
                    className="col-lg-5 ml-auto"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div className="tab-content">
                      <ul className="tab-group">
                        <li className="tab active">
                          <a href="#login">Log In</a>
                        </li>
                        <li className="tab ">
                          <a href="#signup">Sign Up</a>
                        </li>
                      </ul>
                      <div id="login">
                        <form action="" method="post" className="form-box">
                          <h3 className="h4 text-black mb-4">Log In</h3>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Username"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="submit"
                              className="btn btn-primary btn-pill"
                              value="log in"
                            />
                          </div>
                        </form>
                      </div>
                      <div id="signup">
                        <form action="" method="post" className="form-box">
                          <h3 className="h4 text-black mb-4">Sing Up</h3>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email Addresss"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                            />
                          </div>
                          <div className="form-group mb-4">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Re-type Password"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="submit"
                              className="btn btn-primary btn-pill"
                              value="Sign up"
                            />
                          </div>
                        </form>
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

export default Bid;
