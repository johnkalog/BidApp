import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Bid from './components/Bid';
import Items from './components/Items';
import Header from './components/Header';
import store from './store';

import './components/general.css';
import './components/2css/main.css';

import './components/2css/responsive.css';
import './components/fonts/icomoon/style.css';

import './components/css/bootstrap.min.css';
import './components/css/jquery-ui.css';
import './components/css/owl.carousel.min.css';
import './components/css/owl.theme.default.min.css';

import './components/css/jquery.fancybox.min.css';

import './components/css/bootstrap-datepicker.css';

import './components/fonts/flaticon/font/flaticon.css';

// import './components/css/aos.css';

import './components/css/style.css';

import './components/style2.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Bid />
      </Provider>
    );
  }
}

export default App;
