import React from 'react';
import { connect } from 'react-redux';

const Info = () => {
  return (
    <div className="popup">
      <div className="popup_inner">
        <h4>{'User Info'}</h4>
        <ul class="poplist">
          <li>
            <p>{'Username: oioi'}</p>
          </li>
          <li>
            <p>{'First Name: oioi'}</p>
          </li>
          <li>
            <p>{'Last Name: oioi'}</p>
          </li>
          <li>
            <p>{'Email: oioi'}</p>
          </li>
          <li>
            <p>{'Phone: oioi'}</p>
          </li>
          <li>
            <p>{'Location: oioi'}</p>
          </li>
          <li>
            <p>{'Afm: oioi'}</p>
          </li>
          <li>
            <p>{'Type: oioi'}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default connect(
  null,
  null
)(Info);
