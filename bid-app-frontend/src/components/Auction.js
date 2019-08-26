import React from 'react';
import { connect } from 'react-redux';
import { newAuction } from '../actions/productActions';

const createAuction = (event, newAuction) => {
  event.preventDefault();
  console.log('deewfewrfewfewr');
};

const Auction = ({ newAuction }) => {
  return (
    <div className="product_image_area section_padding">
      <div className="container container2">
        <form onSubmit={event => createAuction(event, newAuction)}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <h5>Product Name</h5>
              <input
                type="text"
                className="form-control"
                placeholder="Product Name"
              />
            </div>
            <div className="form-group col-md-6">
              <h6>Category</h6>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Category"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <h6>First Bid</h6>
              <input
                type="text"
                className="form-control"
                placeholder="minimum price"
              />
            </div>
            <div className="form-group col-md-6">
              <h6>Buy Price (Optional)</h6>
              <input
                type="number"
                className="form-control"
                id="inputPassword4"
                placeholder="maximum price"
              />
            </div>
          </div>
          <div className="form-group">
            <h6 for="inputAddress">Location</h6>
            <input
              type="location"
              className="form-control"
              placeholder="Location"
            />
          </div>

          <div className="form-row">
            <div className="form-group  col-md-6">
              <h6>Description</h6>
              <textarea className="form-control" rows="4"></textarea>
            </div>
            <div className="form-group col-md-6">
              <h6 for="inputCity">Image</h6>
              <input type="image" className="form-control" />
            </div>
            <div className="form-group ">
              <h6 for="inputCity">End Date</h6>
              <input
                type="date"
                className="form-control"
                placeholder="yyyy-mm-dd"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
            </div>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(
  null,
  dispatch => ({
    newAuction: newAuction(dispatch)
  })
)(Auction);
