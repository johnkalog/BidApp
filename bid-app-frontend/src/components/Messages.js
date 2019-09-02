import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInbox,
  faPaperPlane,
  faPlusCircle,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import SpecificMessagePop from './SpecificMessagePop';
import {
  redirectToContact,
  getInbox,
  getSent,
  showMessage,
  deleteFromMessages
} from '../actions/messageActions';
import classnames from 'classnames';

const Messages = ({
  user,
  messages,
  inboxOrNot,
  showTheMessage,
  redirectToContact,
  getInbox,
  getSent,
  showMessage,
  deleteFromMessages
}) => {
  return (
    <div>
      <section>
        <div className="container container3">
          <div className="row">
            <div className="col-lg-3">
              <div className="left_sidebar_area left-border-message">
                <aside className="left_widgets p_filter_widgets">
                  <div className="l_w_title">
                    <h3>Dashboard</h3>
                  </div>
                  <div className="widgets_inner">
                    <ul className="list to_options_message">
                      <li
                        className="li-of-message"
                        onClick={() => getInbox(user.id)}
                      >
                        <FontAwesomeIcon icon={faInbox} size="2x" pull="left" />
                        <h5 className="actions email-with-icons">Inbox</h5>
                      </li>
                      <li
                        className="li-of-message"
                        onClick={() => getSent(user.id)}
                      >
                        <FontAwesomeIcon
                          icon={faPaperPlane}
                          size="2x"
                          pull="left"
                        />
                        <h5 className="actions email-with-icons">Sent</h5>
                      </li>
                      <li
                        className="li-of-message"
                        onClick={() => redirectToContact(user.id, user.type)}
                      >
                        <FontAwesomeIcon
                          icon={faPlusCircle}
                          size="2x"
                          pull="left"
                        />
                        <h5 className="actions email-with-icons">Create</h5>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
            <div className="col-lg-9 messages-area-list">
              <div className="row">
                <div className="col-lg-12">
                  <div className="product_top_bar d-flex justify-content-between align-items-center border-down-messages">
                    <div className="single_product_menu at-the-left">
                      <p>{inboxOrNot ? 'From' : 'To'}</p>
                    </div>
                    <div className="single_product_menu d-flex at-the-center">
                      <p>Subject</p>
                    </div>
                    <div className="single_product_menu d-flex at-the-right">
                      <p>Date</p>
                    </div>
                    <div className="delete-the-message"></div>
                  </div>
                  {messages.map(item => (
                    <div
                      className={classnames(
                        'product_top_bar',
                        'd-flex", justify-content-between',
                        'align-items-center',
                        'border-down-email',
                        {
                          'select-this-message': inboxOrNot
                            ? !item.readFromReceiver
                            : false
                        }
                      )}
                      key={item.id}
                      onClick={() => {
                        // alert('fewwewefwef');
                        showMessage(item, inboxOrNot ? 'Receiver' : 'Sender');
                      }}
                    >
                      <div className="single_product_menu at-the-left">
                        <p>
                          {inboxOrNot
                            ? item.sender
                            : item.subject.split('-')[0]}
                        </p>
                      </div>
                      <div className="single_product_menu d-flex at-the-center">
                        <p>{item.subject}</p>
                      </div>
                      <div className="single_product_menu d-flex at-the-right-smaller">
                        <p>{item.messageDate}</p>
                      </div>
                      <div className="delete-the-message">
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          size="1x"
                          pull="right"
                          className="actions"
                          onClick={() => {
                            alert('dedwrb');
                            inboxOrNot
                              ? deleteFromMessages(item, 'Receiver')
                              : '';
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showTheMessage ? <SpecificMessagePop /> : ''}
    </div>
  );
};

export default connect(
  state => ({
    user: state.usersData.user,
    messages: state.messagesData.messages,
    inboxOrNot: state.messagesData.inboxOrNot,
    showTheMessage: state.messagesData.showTheMessage
  }),
  dispatch => ({
    redirectToContact: redirectToContact(dispatch),
    getInbox: getInbox(dispatch),
    getSent: getSent(dispatch),
    showMessage: showMessage(dispatch),
    deleteFromMessages: deleteFromMessages(dispatch)
  })
)(Messages);
