import React from 'react';
import { connect } from 'react-redux';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const OpenMapItem = ({ productName, latitude, longitude }) => {
  const position = [latitude, longitude];
  return (
    <Map center={position} zoom={13}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Here is the product <br /> {productName}.
        </Popup>
      </Marker>
    </Map>
  );
};

export default connect(
  state => ({
    productName: state.productsData.product.productName,
    latitude: state.productsData.latitude,
    longitude: state.productsData.longitude
  }),
  null
)(OpenMapItem);
