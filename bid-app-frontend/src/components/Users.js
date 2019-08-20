import React from 'react';
import { connect } from 'react-redux';

const Users = ({ users }) => {
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
                  <tr>
                    <td>
                      <div class="media">
                        <div class="media-body">
                          <p>User3</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>Accepted</h5>
                    </td>
                    <td>
                      <div class="product_count">
                        <button onclick="location.href=#" type="button">
                          Accept
                        </button>
                      </div>
                    </td>

                    <td>
                      <div class="product_count">
                        <button onclick="location.href=#" type="button">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="media">
                        <div class="media-body">
                          <p>User2</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5 />
                    </td>
                    <td>
                      <div class="product_count">
                        <button onclick="location.href=#" type="button">
                          Accept
                        </button>
                      </div>
                    </td>

                    <td>
                      <div class="product_count">
                        <button onclick="location.href=#" type="button">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="media">
                        <div class="media-body">
                          <p>User3</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>Accepted</h5>
                    </td>
                    <td>
                      <div class="product_count">
                        <button onclick="location.href=#" type="button">
                          Accept
                        </button>
                      </div>
                    </td>

                    <td>
                      <div class="product_count">
                        <button onclick="location.href=#" type="button">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
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
)(Users);
