import React from 'react';
import { connect } from 'react-redux';
import { newAuction } from '../actions/productActions';
import { inputError } from '../actions/userActions';
import classnames from 'classnames';
import { createTheOptions } from '../actions/categorieActions';

const createAuction = (
  event,
  id,
  newAuction,
  file,
  newOrUpdate,
  productId,
  inputError
) => {
  event.preventDefault();
  if (file.length === 0) {
    inputError('productImage');
    return;
  }
  const fd = new FormData();
  fd.append('imageFile', file, file.name);
  const newProduct = {
    productName: event.target[0].value,
    category: event.target[1].value,
    firstBid: event.target[2].value,
    buyPrice: event.target[3].value,
    location: event.target[4].value,
    description: event.target[5].value,
    expirationDate: event.target[7].value,
    ownerId: id
    //status: true
  };
  if (newProduct.productName.length === 0) {
    inputError('productName');
  }
  if (newProduct.category.length === 0) {
    inputError('category');
  }
  if (newProduct.firstBid.length === 0) {
    inputError('firstBid');
  }
  if (newProduct.location.length === 0) {
    inputError('location');
  }
  if (newProduct.description.length === 0) {
    inputError('description');
  }
  // if (newProduct.productImage.length === 0) {
  //   inputError('productImage');
  // }
  if (newProduct.expirationDate.length === 0) {
    inputError('expirationDate');
    return;
  }
  if (!newOrUpdate) {
    newProduct.id = productId;
  }
  newAuction(newProduct, fd);
};

const Auction = ({
  id,
  errors,
  auctionError,
  categories,
  product,
  newOrUpdate,
  newAuction,
  inputError
}) => {
  let file = '';
  return (
    <div className="product_image_area section_padding">
      <div className="container container2">
        <form
          onSubmit={event =>
            createAuction(
              event,
              id,
              newAuction,
              file,
              newOrUpdate,
              product.id,
              inputError
            )
          }
        >
          <div className="form-row">
            <div className="form-group col-md-6">
              <h5>Product Name</h5>
              <input
                type="text"
                className={classnames('form-control', {
                  'is-invalid': errors.productName
                })}
                placeholder="Product Name"
                defaultValue={!newOrUpdate ? product.productName : ''}
              />
            </div>
            <div className="form-group col-md-6">
              <h6>Category</h6>
              <select className="form-control">
                {createTheOptions(categories).map(category => {
                  if (category.depth === 0) {
                    return (
                      <option
                        selected={
                          !newOrUpdate && product.category == category.name
                        }
                      >
                        {category.name}
                      </option>
                    );
                  } else if (category.depth === 1) {
                    return (
                      <option
                        selected={
                          !newOrUpdate && product.category == category.name
                        }
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;{category.name}
                      </option>
                    );
                  } else if (category.depth === 2) {
                    return (
                      <option
                        selected={
                          !newOrUpdate && product.category == category.name
                        }
                      >
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {category.name}
                      </option>
                    );
                  }
                })}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <h6>First Bid</h6>
              <input
                type="number"
                className={classnames('form-control', {
                  'is-invalid': errors.firstBid
                })}
                placeholder="minimum price *"
                defaultValue={!newOrUpdate ? product.firstBid : ''}
              />
            </div>
            <div className="form-group col-md-6">
              <h6>Buy Price (Optional)</h6>
              <input
                type="number"
                className="form-control"
                id="inputPassword4"
                placeholder="maximum price"
                defaultValue={!newOrUpdate ? product.buyPrice : ''}
              />
            </div>
          </div>
          <div className="form-group">
            <h6 htmlFor="inputAddress">Location</h6>
            <input
              type="location"
              className={classnames('form-control', {
                'is-invalid': errors.location
              })}
              placeholder="Location *"
              defaultValue={!newOrUpdate ? product.location : ''}
            />
          </div>
          <div className="form-row">
            <div className="form-group  col-md-6">
              <h6>Description</h6>
              <textarea
                className={classnames('form-control', {
                  'is-invalid': errors.description
                })}
                rows="4"
                placeholder="Write here..."
                defaultValue={!newOrUpdate ? product.description : ''}
              ></textarea>
            </div>
            <div className="form-group col-md-6">
              <h6>Image</h6>
              <input
                type="file"
                className={classnames('form-control', {
                  'is-invalid': errors.productImage
                })}
                name="imageFile"
                onChange={event => {
                  file = event.target.files[0];
                }}
              />
            </div>
            <div className="form-group ">
              <h6 htmlFor="inputCity">End Date</h6>
              <input
                type="datetime-local"
                className={classnames('form-control', {
                  'is-invalid': errors.expirationDate
                })}
                placeholder="dd-mm-yyy"
                defaultValue={!newOrUpdate ? product.expirationDate : ''}
              />
            </div>
          </div>
          <div className="message-auction-red">{auctionError}</div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              value={!newOrUpdate ? 'Update' : 'Submit'}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(
  state => ({
    id: state.usersData.user.id,
    errors: state.productsData.errors,
    auctionError: state.productsData.auctionError,
    categories: state.categoriesData.categories,
    product: state.productsData.product,
    newOrUpdate: state.productsData.newOrUpdate
  }),
  dispatch => ({
    newAuction: newAuction(dispatch),
    inputError: inputError(dispatch)
  })
)(Auction);
