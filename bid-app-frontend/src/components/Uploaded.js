import React from 'react';
import { connect } from 'react-redux';
import UploadedItem from './UploadedItem';
import { getUploadedSeller } from '../actions/productActions';

const Uploaded = ({ products, forSellerAppear, id, getUploadedSeller }) => {
  if (forSellerAppear) {
    getUploadedSeller(id);
  }
  return (
    <div>
      <section className="cart_area padding_top">
        <div className="container container2">
          <div className="cart_inner">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">User with best bid</th>
                    <th scope="col">Best Bid</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(item => (
                    <UploadedItem key={item.id} product={item} />
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
    products: state.productsData.products,
    forSellerAppear: state.usersData.forSellerAppear,
    id: state.usersData.user.id
  }),
  dispatch => ({
    getUploadedSeller: getUploadedSeller(dispatch)
  })
)(Uploaded);
