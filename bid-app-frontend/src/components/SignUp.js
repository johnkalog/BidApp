import React from 'react';
import { connect } from 'react-redux';
import { inputError, newUser, notSamePasswords } from '../actions/userActions';
import classnames from 'classnames';

const logIn = (event, inputError, newUser, notSamePasswords) => {
  event.preventDefault();
  const username = event.target[0].value;
  if (username.length === 0) {
    inputError('username');
  }
  const password = event.target[1].value;
  if (password.length === 0) {
    inputError('password');
  }
  const re_type = event.target[2].value;
  if (re_type.length === 0) {
    inputError('re_type');
    return;
  }
  if (password !== re_type) {
    notSamePasswords("Passwords don't match");
    return;
  }
  newUser({ username, password });
};

const SignUp = ({
  user,
  username,
  password,
  re_type,
  signUpMessage,
  inputError,
  newUser,
  notSamePasswords
}) => {
  console.log(user, signUpMessage);
  return (
    <div id="sign-up">
      <form
        className="form-box"
        onSubmit={event => logIn(event, inputError, newUser, notSamePasswords)}
      >
        <h3 className="h4 text-black mb-4">Sign Up</h3>
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
            type="password"
            name="username"
            className={classnames('form-control', {
              'is-invalid': re_type
            })}
            placeholder="Re-type Password"
          />
        </div>
        <h6>{signUpMessage}</h6>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-primary btn-pill"
            value="Sign up"
          />
        </div>
      </form>
    </div>
  );
};

export default connect(
  state => ({
    user: state.usersData.user,
    username: state.usersData.errors.username,
    password: state.usersData.errors.password,
    re_type: state.usersData.errors.re_type,
    signUpMessage: state.usersData.signUpMessage
  }),
  dispatch => ({
    inputError: inputError(dispatch),
    newUser: newUser(dispatch),
    notSamePasswords: notSamePasswords(dispatch)
  })
)(SignUp);
