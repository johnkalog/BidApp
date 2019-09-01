import React from 'react';
import { connect } from 'react-redux';
import ShopItem from './ShopItem';

const Shop = ({ products }) => {
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
                    <th scope="col">Your Bid</th>
                    <th scope="col">Best Bid</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(item => (
                    <ShopItem key={item.id} product={item} />
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
)(Shop);
