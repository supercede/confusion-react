import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainComponent from './components/MainComponent';
import { configureStore } from './redux/configureStore';
import './App.css';

const store = configureStore();

class App extends Component {
  render () {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <div>
            <MainComponent />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
