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
  const firstName = event.target[3].value;
  const lastName = event.target[4].value;
  const email = event.target[5].value;
  const phone = event.target[6].value;
  const location = event.target[7].value;
  const afm = event.target[8].value;
  const type = event.target[9].value;
  newUser({
    username,
    password,
    firstName,
    lastName,
    email,
    phone,
    location,
    afm,
    type,
    status: 'Waiting'
  });
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
        <div className="form-group">
          <input
            type="password"
            name="username"
            className={classnames('form-control', {
              'is-invalid': re_type
            })}
            placeholder="Re-type Password *"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Phone"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="location"
            className="form-control"
            placeholder="Location"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="afm"
            className="form-control"
            placeholder="Afm"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="type"
            className="form-control"
            placeholder="Type"
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
