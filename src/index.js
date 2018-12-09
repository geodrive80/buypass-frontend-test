import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment/moment';
// eslint-disable-next-line
import localization from 'moment/locale/nb';
import './index.css';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

moment.locale('nb');

const store = configureStore({
  isLoading: true,
  isAscending: false,
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
