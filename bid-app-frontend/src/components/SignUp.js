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
  const password = event.target[2].value;
  if (password.length === 0) {
    inputError('password');
  }
  const re_type = event.target[3].value;
  if (re_type.length === 0) {
    inputError('re_type');
    return;
  }
  if (password !== re_type) {
    notSamePasswords("Passwords don't match");
    return;
  }
  const firstName = event.target[4].value;
  const lastName = event.target[5].value;
  const email = event.target[1].value;
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
  return (
    <div id="sign-up">
      <form
        className="form-box"
        onSubmit={event => logIn(event, inputError, newUser, notSamePasswords)}
      >
        <h3 className="h4 text-black mb-4">Sign Up</h3>
        <div className="form-row form-group">
          <div className="col">
            <input
              type="text"
              className={classnames('form-control', {
                'is-invalid': username
              })}
              placeholder="Username *"
            />
          </div>
          <div className="col">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="form-row form-group">
          <div className="col">
            <input
              type="password"
              name="username"
              className={classnames('form-control', {
                'is-invalid': password
              })}
              placeholder="Password *"
            />
          </div>

          <div className="col">
            <input
              type="password"
              name="username"
              className={classnames('form-control', {
                'is-invalid': re_type
              })}
              placeholder="Re-type Password *"
            />
          </div>
        </div>
        <div className="form-row form-group">
          <div className="col">
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First Name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="form-row form-group">
          <div className="col">
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Phone"
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="location"
              className="form-control"
              placeholder="Location"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              name="afm"
              className="form-control"
              placeholder="Afm"
            />
          </div>
          <div className="col">
            <select className="form-control">
              <option>Bidder</option>
              <option>Seller</option>
            </select>
          </div>
        </div>
        <div className="message-auction-red">{signUpMessage}</div>
        <div className="form-group for-sign-up">
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
