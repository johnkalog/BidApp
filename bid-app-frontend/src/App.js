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

import './components/general.css';
import './components/fonts/icomoon/style.css';

import './components/css/bootstrap.min.css';
import './components/css/jquery-ui.css';
//import './components/css/owl.carousel.min.css';
import './components/css/owl.theme.default.min.css';

import './components/css/jquery.fancybox.min.css';

import './components/css/bootstrap-datepicker.css';

import './components/fonts/flaticon/font/flaticon.css';

// import './components/css/aos.css';

import './components/css/style.css';
import './components/css/style3.css';

import './components/style2.css';

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
        </Router>
      </Provider>
    );
  }
}

export default App;
