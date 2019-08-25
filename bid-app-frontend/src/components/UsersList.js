import React from 'react';
import { connect } from 'react-redux';
import User from './User';

const UsersList = ({ users }) => {
  return (
    <div>
      <section className="cart_area padding_top">
        <div className="container container2">
          <div className="cart_inner">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Status</th>
                    <th scope="col">Type</th>
                    <th scope="col">Accept User</th>
                    <th scope="col">Block User</th>
                    <th scope="col">Delete User</th>
                    <th scope="col">Info</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(item => (
                    <User key={item.id} user={item} />
                  ))}
                </tbody>
              </table>
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
