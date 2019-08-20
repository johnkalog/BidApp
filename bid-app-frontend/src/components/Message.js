import React from 'react';
import { connect } from 'react-redux';

const Message = () => {
  return (
    <div>
      <div className="intro-section" id="home-section">
        <div className="container">
          <div className="row align-items-center">
            <div class="container">
              <div class="returning_customer">
                <div class="check_title">
                  <h2>
                    Waiting for Administrator to accept you...
                  </h2>
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
  null,
  null
)(Message);
