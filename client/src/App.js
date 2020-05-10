import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from './Redux/store'
import { Provider } from 'react-redux'

import Home from './Container/HomePage'


const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;