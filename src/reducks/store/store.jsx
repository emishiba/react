import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { UserReducer } from '../users/reducers';

export const createStore = (history) => {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      user: UserReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
};

export default createStore;
