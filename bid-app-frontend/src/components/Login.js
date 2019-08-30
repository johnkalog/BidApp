import React from 'react';
import { connect } from 'react-redux';
import { inputError, checkUser } from '../actions/userActions';
import classnames from 'classnames';

const logIn = (event, inputError, checkUser, status) => {
  event.preventDefault();
  const username = event.target[0].value;
  if (username.length === 0) {
    inputError('username');
  }
  const password = event.target[1].value;
  if (password.length === 0) {
    inputError('password');
    return;
  }
  checkUser({ username, password });
};

const Login = ({
  user,
  username,
  password,
  loginMessage,
  inputError,
  checkUser
}) => {
  console.log(user, loginMessage);
  return (
    <div id="login">
      <form
        className="form-box"
        onSubmit={event => logIn(event, inputError, checkUser, user.status)}
      >
        <h3 className="h4 text-black mb-4">Log In</h3>
        <div className="form-group">
          <input
            type="text"
            className={classnames('form-control', {
              'is-invalid': username
            })}
            placeholder="Username *"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="username"
            className={classnames('form-control', {
              'is-invalid': password
            })}
            placeholder="Password *"
          />
        </div>
        <div className="message-auction-red">{loginMessage}</div>
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
    password: state.usersData.errors.password,
    loginMessage: state.usersData.loginMessage,
    user: state.usersData.user
  }),
  dispatch => ({
    inputError: inputError(dispatch),
    checkUser: checkUser(dispatch)
  })
)(Login);
