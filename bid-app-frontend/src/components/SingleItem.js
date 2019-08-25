import React from 'react';
import { connect } from 'react-redux';

const SingleItem = () => {
  return (
    <div>
      <div className="product_image_area section_padding">
        <div className="container container2">
          <div className="row s_product_inner justify-content-between">
            <div className="col-lg-7 col-xl-7">
              <div className="product_slider_img">
                <div id="vertical">
                  <div data-thumb="img/product/single-product/product_1.png">
                    <img
                      src={require('./img/product/single-product/product_1.png')}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-4">
              <div className="s_product_text">
                <h3>Faded SkyBlu Denim Jeans</h3>
                <ul className="list">
                  <li>
                    <a className="active" href="#">
                      <span>Current Bid</span> :{' '}
                      <span>
                        <h2>$123</h2>{' '}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="active" href="#">
                      <span>Category</span> : Household
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {' '}
                      <span>Availibility</span> : In Stock
                    </a>
                  </li>
                </ul>
                <p>
                  First replenish living. Creepeth image image. Creeping can't,
                  won't called. Two fruitful let days signs sea together all
                  land fly subdue
                </p>
                <div className="card_area d-flex justify-content-between align-items-center">
                  <div className="product_count">
                    <input className="input-number" type="text" value="1" />
                  </div>
                  <a href="#" className="btn_3">
                    Bid It
                  </a>
                  <a href="#" className="like_us">
                    {' '}
                    <i className="ti-heart" />{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="product_description_area">
        <div className="container">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Description
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Specification
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Comments
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                id="review-tab"
                data-toggle="tab"
                href="#review"
                role="tab"
                aria-controls="review"
                aria-selected="false"
              >
                Reviews
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <p>
                Beryl Cook is one of Britain’s most talented and amusing artists
                .Beryl’s pictures feature women of all shapes and sizes enjoying
                themselves .Born between the two world wars, Beryl Cook
                eventually left Kendrick School in Reading at the age of 15,
                where she went to secretarial school and then into an insurance
                office. After moving to London and then Hampton, she eventually
                married her next door neighbour from Reading, John Cook. He was
                an officer in the Merchant Navy and after he left the sea in
                1956, they bought a pub for a year before John took a job in
                Southern Rhodesia with a motor company. Beryl bought their young
                son a box of watercolours, and when showing him how to use it,
                she decided that she herself quite enjoyed painting. John
                subsequently bought her a child’s painting set for her birthday
                and it was with this that she produced her first significant
                work, a half-length portrait of a dark-skinned lady with a
                vacant expression and large drooping breasts. It was aptly named
                ‘Hangover’ by Beryl’s husband and
              </p>
              <p>
                It is often frustrating to attempt to plan meals that are
                designed for one. Despite this fact, we are seeing more and more
                recipe books and Internet websites that are dedicated to the act
                of cooking for one. Divorce and the death of spouses or grown
                children leaving for college are all reasons that someone
                accustomed to cooking for more than one would suddenly need to
                learn how to adjust all the cooking practices utilized before
                into a streamlined plan of cooking that is more efficient for
                one person creating less
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <h5>Width</h5>
                      </td>
                      <td>
                        <h5>128mm</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Height</h5>
                      </td>
                      <td>
                        <h5>508mm</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Depth</h5>
                      </td>
                      <td>
                        <h5>85mm</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Weight</h5>
                      </td>
                      <td>
                        <h5>52gm</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Quality checking</h5>
                      </td>
                      <td>
                        <h5>yes</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Freshness Duration</h5>
                      </td>
                      <td>
                        <h5>03days</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>When packeting</h5>
                      </td>
                      <td>
                        <h5>Without touch of hand</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Each Box contains</h5>
                      </td>
                      <td>
                        <h5>60pcs</h5>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="comment_list">
                    <div className="review_item">
                      <div className="media">
                        <div className="d-flex">
                          <img
                            src="img/product/single-product/review-1.png"
                            alt=""
                          />
                        </div>
                        <div className="media-body">
                          <h4>Blake Ruiz</h4>
                          <h5>12th Feb, 2017 at 05:56 pm</h5>
                          <a className="reply_btn" href="#">
                            Reply
                          </a>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>
                    </div>
                    <div className="review_item reply">
                      <div className="media">
                        <div className="d-flex">
                          <img
                            src="img/product/single-product/review-2.png"
                            alt=""
                          />
                        </div>
                        <div className="media-body">
                          <h4>Blake Ruiz</h4>
                          <h5>12th Feb, 2017 at 05:56 pm</h5>
                          <a className="reply_btn" href="#">
                            Reply
                          </a>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>
                    </div>
                    <div className="review_item">
                      <div className="media">
                        <div className="d-flex">
                          <img
                            src="img/product/single-product/review-3.png"
                            alt=""
                          />
                        </div>
                        <div className="media-body">
                          <h4>Blake Ruiz</h4>
                          <h5>12th Feb, 2017 at 05:56 pm</h5>
                          <a className="reply_btn" href="#">
                            Reply
                          </a>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="review_box">
                    <h4>Post a comment</h4>
                    <form
                      className="row contact_form"
                      action="contact_process.php"
                      method="post"
                      id="contactForm"
                      novalidate="novalidate"
                    >
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Your Full name"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="number"
                            name="number"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            name="message"
                            id="message"
                            rows="1"
                            placeholder="Message"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 text-right">
                        <button type="submit" value="submit" className="btn_3">
                          Submit Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade show active"
              id="review"
              role="tabpanel"
              aria-labelledby="review-tab"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="row total_rate">
                    <div className="col-6">
                      <div className="box_total">
                        <h5>Overall</h5>
                        <h4>4.0</h4>
                        <h6>(03 Reviews)</h6>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="rating_list">
                        <h3>Based on 3 Reviews</h3>
                        <ul className="list">
                          <li>
                            <a href="#">
                              5 Star
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" /> 01
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              4 Star
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" /> 01
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              3 Star
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" /> 01
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              2 Star
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" /> 01
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              1 Star
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" /> 01
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="review_list">
                    <div className="review_item">
                      <div className="media">
                        <div className="d-flex">
                          <img
                            src="img/product/single-product/review-1.png"
                            alt=""
                          />
                        </div>
                        <div className="media-body">
                          <h4>Blake Ruiz</h4>
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>
                    </div>
                    <div className="review_item">
                      <div className="media">
                        <div className="d-flex">
                          <img
                            src="img/product/single-product/review-2.png"
                            alt=""
                          />
                        </div>
                        <div className="media-body">
                          <h4>Blake Ruiz</h4>
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>
                    </div>
                    <div className="review_item">
                      <div className="media">
                        <div className="d-flex">
                          <img
                            src="img/product/single-product/review-3.png"
                            alt=""
                          />
                        </div>
                        <div className="media-body">
                          <h4>Blake Ruiz</h4>
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="review_box">
                    <h4>Add a Review</h4>
                    <p>Your Rating:</p>
                    <ul className="list">
                      <li>
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                      </li>
                    </ul>
                    <p>Outstanding</p>
                    <form
                      className="row contact_form"
                      action="contact_process.php"
                      method="post"
                      novalidate="novalidate"
                    >
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Your Full name"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="number"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            name="message"
                            rows="1"
                            placeholder="Review"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 text-right">
                        <button type="submit" value="submit" className="btn_3">
                          Submit Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default connect(
  null,
  null
)(SingleItem);
