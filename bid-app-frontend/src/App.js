import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Bid from './components/Bid';
import store from './store';

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
