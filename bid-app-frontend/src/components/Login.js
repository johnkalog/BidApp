import React from 'react';
import { connect } from 'react-redux';
import { inputError } from '../actions/userActions';
import { changeLogin } from '../actions/userActions';
import classnames from 'classnames';

const logIn = (event, inputError) => {
  event.preventDefault();
  const username = event.target[0].value;
  if (username.length === 0) {
    inputError('username');
  }
  const password = event.target[1].value;
  if (password.length === 0) {
    inputError('password');
  }
};

const Login = ({ username, password, inputError }) => {
  console.log(username, password);
  return (
    <div id="login">
      <form className="form-box" onSubmit={event => logIn(event, inputError)}>
        <h3 className="h4 text-black mb-4">Log In</h3>
        <div className="form-group">
          <input
            type="text"
            className={classnames('form-control', {
              'is-invalid': username
            })}
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="username"
            className={classnames('form-control', {
              'is-invalid': password
            })}
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

export default connect(
  state => ({
    username: state.usersData.errors.username,
    password: state.usersData.errors.password
  }),
  dispatch => ({
    inputError: inputError(dispatch)
  })
)(Login);
