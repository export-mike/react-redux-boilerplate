import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import Root from './containers/root';
import configureStore from './store';

const store = configureStore();
import './global.css';

render(<Provider store={store}>
    <Root/>
  </Provider>, document.getElementById('root'));
