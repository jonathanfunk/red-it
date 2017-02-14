import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postReducer } from './../reducers/PostsReducer';
import { weekReducer } from './../reducers/WeeksReducer';
import { filterReducer } from './../reducers/FiltersReducer';
import { createPostReducer } from './../reducers/CreatePostReducer';
import { actionLogger } from './middleware';

export default createStore(
  combineReducers({
    posts: postReducer,
    weeks: weekReducer,
    filter: filterReducer,
    categories: createPostReducer,
  }),
  composeWithDevTools(
    applyMiddleware(actionLogger, thunk),
  ),
);
