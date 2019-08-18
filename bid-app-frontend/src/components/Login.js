import React from 'react';
import { connect } from 'react-redux';
import { changeLogin } from '../actions/userActions';

const Login = () => {
  return (
    <div id="login">
      <form action="" method="post" className="form-box">
        <h3 className="h4 text-black mb-4">Log In</h3>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Username" />
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
  );
};

export default Login;
