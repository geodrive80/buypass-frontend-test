import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';

export default function configureStore(initialState) {
  const { NODE_ENV } = process.env;
  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(logger, thunk),
      NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
        window.__REDUX_DEVTOOLS_EXTENSION__() : fn => fn
    )
  );
}