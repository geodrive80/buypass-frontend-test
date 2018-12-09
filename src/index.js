import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

const store = configureStore({
  sortAscending: false,
  showAll: false,
  from: 0,
  size: 4
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
