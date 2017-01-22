import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postReducer } from './../reducers/PostsReducer';
import { weekReducer } from './../reducers/WeeksReducer';


export default createStore(
  combineReducers({
    posts: postReducer,
    weeks: weekReducer,
  }),
  composeWithDevTools(),
);
