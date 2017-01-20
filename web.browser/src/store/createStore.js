import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from '../containers/actions';

export default createStore(
  combineReducers({ posts: reducer }),
  composeWithDevTools(),
);
