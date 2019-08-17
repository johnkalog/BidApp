import React from 'react';

const Bid = () => {
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
                        Learn From The Expert
                      </h1>
                      <p
                        className="mb-4"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
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
                            <h3 className="h4 text-black mb-4">Sign Up</h3>
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
    </div>
  );
};

export default Bid;
