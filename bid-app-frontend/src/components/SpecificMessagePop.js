import React from 'react';
import { connect } from 'react-redux';

const SpecificMessagePop = () => {
  return (
    <div>
      <div className="popup">
        <div className="popup_inner"></div>
      </div>
    </div>
  );
};

export default connect(
  null,
  null
)(SpecificMessagePop);
