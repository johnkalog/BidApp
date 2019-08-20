import React from 'react';
import { connect } from 'react-redux';
import User from './User';

const UsersList = ({ users }) => {
  console.log(users);
  return (
    <div>
      <section class="cart_area padding_top">
        <div class="container container2">
          <div class="cart_inner">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Status</th>
                    <th scope="col">Accept User</th>
                    <th scope="col">Delete User</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(item => (
                    <User key={item.id} user={item} />
                  ))}
                </tbody>
              </table>
              <div class="checkout_btn_inner float-right">
                <a class="btn_1" href="#">
                  Continue Shopping
                </a>
                <a class="btn_1 checkout_btn_1" href="#">
                  Proceed to checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default connect(
  state => ({
    users: state.usersData.users
  }),
  null
)(UsersList);
