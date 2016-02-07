import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistory } from 'react-router-redux';
import thunk from 'redux-thunk';
import {hashHistory} from 'react-router';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';
/**
 * Method to create stores based on a set of passed
 * reducers
 * @param initialState
 * @returns {*}
 */
export default function configureStore(initialState) {

  const logger = createLogger();
  const reduxRouterMiddleware = syncHistory(hashHistory);
  const middleware = applyMiddleware(thunk, logger, reduxRouterMiddleware);

  const createStoreWithMiddleware = compose(
    middleware
  );

  const store = createStoreWithMiddleware(createStore)(rootReducer, initialState);

  reduxRouterMiddleware.listenForReplays(store);

  return store;
}
