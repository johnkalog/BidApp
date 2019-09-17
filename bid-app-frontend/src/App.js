import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import Bid from './components/Bid';
import ItemsList from './components/ItemsList';
import Header from './components/Header';
import store from './store';
import history from './history';
import UsersList from './components/UsersList';
import Shop from './components/Shop';
import Message from './components/Message';
import Contact from './components/Contact';
import SingleItem from './components/SingleItem';
import Auction from './components/Auction';
import Uploaded from './components/Uploaded';
import Messages from './components/Messages';
import OpenMapItem from './components/OpenMapItem';

import './components/general.css';
import './components/fonts/icomoon/style.css';

import './components/css/bootstrap.min.css';
import './components/css/jquery-ui.css';
// import './components/css/owl.carousel.min.css';
import './components/css/owl.theme.default.min.css';

import './components/css/jquery.fancybox.min.css';

import './components/css/bootstrap-datepicker.css';

import './components/fonts/flaticon/font/flaticon.css';

// import './components/css/aos.css';

import './components/css/style.css';
import './components/css/style3.css';

import './components/css/style2.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
// import 'leaflet/dist/leaflet.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Route exact path="/" component={Bid} />
          <Route exact path="/products" component={ItemsList} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/waiting" component={Message} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/single" component={SingleItem} />
          <Route exact path="/auction" component={Auction} />
          <Route exact path="/uploaded" component={Uploaded} />
          <Route exact path="/contact" component={Contact} />
        </Router>
      </Provider>
    );
  }
}

export default App;
