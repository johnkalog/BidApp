import React from 'react';
import { connect } from 'react-redux';
import { changeTheError, createNewMessage } from '../actions/messageActions';

const submitMessage = (
  event,
  to,
  user,
  productsForCheck,
  changeTheError,
  createNewMessage
) => {
  event.preventDefault();
  const subject = event.target[0].value;
  const message = event.target[1].value;
  if (subject === `${to}-Product`) {
    changeTheError("Select options if you have");
    return;
  }
  if (message.length === 0) {
    changeTheError('Please fill the message');
    return;
  }
  const senderId = user.id;
  let productForSearch;
  let receiverId;
  if (user.type === 'Bidder') {
    productForSearch = productsForCheck.find(
      item =>
        item.ownerName === subject.split('-')[0] &&
        item.productName === subject.split('-')[1]
    );
    receiverId = productForSearch.ownerId;
  } else if (user.type === 'Seller') {
    productForSearch = productsForCheck.find(
      item =>
        item.bestBidderName === subject.split('-')[0] &&
        item.productName === subject.split('-')[1]
    );
    receiverId = productForSearch.bestBidOwnerId;
  }
  const productId = productForSearch.id;
  const messageForSubmit = {
    senderId,
    receiverId,
    productId,
    message,
    subject
  };
  createNewMessage(user.id, messageForSubmit);
};

const Contact = ({
  user,
  errorOnSubmit,
  subjects,
  productsForCheck,
  changeTheError,
  createNewMessage
}) => {
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
                onSubmit={event =>
                  submitMessage(
                    event,
                    to,
                    user,
                    productsForCheck,
                    changeTheError,
                    createNewMessage
                  )
                }
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <select className="form-control">
                        <option>{`${to}-Product`}</option>
                        {subjects.map(item => (
                          <option key={item.id}>{item}</option>
                        ))}
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
              <div className="message-auction-red">{errorOnSubmit}</div>
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
    user: state.usersData.user,
    errorOnSubmit: state.messagesData.errorOnSubmit,
    subjects: state.messagesData.subjects,
    productsForCheck: state.messagesData.productsForCheck
  }),
  dispatch => ({
    changeTheError: changeTheError(dispatch),
    createNewMessage: createNewMessage(dispatch)
  })
)(Contact);
