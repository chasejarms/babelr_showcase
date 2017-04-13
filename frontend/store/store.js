import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => (
  createStore(RootReducer, preloadedState, applyMiddleware(logger))
);

export default configureStore;
