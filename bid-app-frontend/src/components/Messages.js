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
import history from '../history';

const Messages = () => {
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
                      <li className="li-of-message">
                        <FontAwesomeIcon icon={faInbox} size="2x" pull="left" />
                        <h5 className="actions email-with-icons">Inbox</h5>
                      </li>
                      <li className="li-of-message">
                        <FontAwesomeIcon
                          icon={faPaperPlane}
                          size="2x"
                          pull="left"
                        />
                        <h5 className="actions email-with-icons">Sent</h5>
                      </li>
                      <li
                        className="li-of-message"
                        onClick={() => history.push('contact')}
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
                      <p>From</p>
                    </div>
                    <div className="single_product_menu d-flex at-the-center">
                      <p>Subject</p>
                    </div>
                    <div className="single_product_menu d-flex at-the-right">
                      <p>Date</p>
                    </div>
                    <div className="delete-the-message"></div>
                  </div>
                  <div className="product_top_bar d-flex justify-content-between align-items-center border-down-email">
                    <div className="single_product_menu at-the-left">
                      <p>admin</p>
                    </div>
                    <div className="single_product_menu d-flex at-the-center">
                      <p>All fine</p>
                    </div>
                    <div className="single_product_menu d-flex at-the-right-smaller">
                      <p>30-8-2019</p>
                    </div>
                    <div className="delete-the-message">
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        size="1x"
                        pull="right"
                        className="actions"
                      />
                    </div>
                  </div>
                  <div className="product_top_bar d-flex justify-content-between align-items-center border-down-email">
                    <div className="single_product_menu at-the-left">
                      <p>admin</p>
                    </div>
                    <div className="single_product_menu d-flex at-the-center">
                      <p>All fine</p>
                    </div>
                    <div className="single_product_menu d-flex at-the-right-smaller">
                      <p>30-8-2019</p>
                    </div>
                    <div className="delete-the-message">
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        size="1x"
                        pull="right"
                        className="actions"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <SpecificMessagePop /> */}
    </div>
  );
};

export default connect(
  null,
  null
)(Messages);
