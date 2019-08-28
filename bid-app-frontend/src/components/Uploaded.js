import React from 'react';
import { connect } from 'react-redux';
import UploadedItem from './UploadedItem';

const Uploaded = ({ products }) => {
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
    products: state.productsData.products
  }),
  null
)(Uploaded);
