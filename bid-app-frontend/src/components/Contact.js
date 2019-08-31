import React from 'react';
import { connect } from 'react-redux';

const submitMessage = event => {
  event.preventDefault();
  const message = event.target[0].value;
  const subject = event.target[1].value;
  if (message.length === 0) {
  }
};

const Contact = ({ user }) => {
  const info =
    user.type === 'Bidder'
      ? "You can send message only to sellers that you've bought their product"
      : "You can send message only to bidders that you've bought your product";
  const to = user.type === 'Bidder' ? 'Seller' : 'Bidder';
  return (
    <div>
      <section className="contact-section padding_top">
        <div className="container">
          <div className="d-none d-sm-block mb-5 pb-4">
            <div id="map" />
          </div>

          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Fill the fields</h2>
            </div>
            <div className="col-lg-8">
              <form
                className="form-contact contact_form"
                onSubmit={event => submitMessage(event)}
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <select className="form-control">
                        <option>Bidder</option>
                        <option>Seller</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="message"
                        id="message"
                        cols="30"
                        rows="9"
                        placeholder="Enter Message"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn_3 button-contactForm message-at-submit"
                  />
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-home" />
                </span>
                <div className="media-body">
                  <h3>{info}</h3>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-tablet" />
                </span>
                <div className="media-body">
                  <h3>{`Subject will be the ${to}-Product you choosed`}</h3>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-email" />
                </span>
                <div className="media-body">
                  <p>Thank you for trusting us!</p>
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
  state => ({
    user: state.usersData.user
  }),
  null
)(Contact);
