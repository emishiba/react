import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { WorksReducer } from '../works/reducers';
import { ContactReducer } from '../contact/reducers';

export const createStore = (history) => {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      works: WorksReducer,
      contact: ContactReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk, logger)
  );
};

export default createStore;
