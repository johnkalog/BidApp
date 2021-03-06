import React from 'react';
import { connect } from 'react-redux';

const Message = ({ status }) => {
  const message =
    status === 'Waiting'
      ? 'Waiting for Administrator to accept you...'
      : "You've been blocked from the Administrator...";
  return (
    <div>
      <div className="intro-section" id="home-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="container">
              <div className="returning_customer">
                <div className="check_title">
                  <h2>{message}</h2>
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
    status: state.usersData.user.status
  }),
  null
)(Message);
