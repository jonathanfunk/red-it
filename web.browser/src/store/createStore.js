import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postReducer } from './../reducers/PostsReducer';
import { weekReducer } from './../reducers/WeeksReducer';
import { filterReducer } from './../reducers/FiltersReducer';

const actionLogger = theStore => next => (action) => {
  let result;
  console.info('DISPATCHING', action);
  try {
    result = next(action);
    console.info('NEXT STATE', theStore.getState());
  } catch (e) {
    console.warn('There was an error', e);
    throw e;
  }
  return result;
};


export default createStore(
  combineReducers({
    posts: postReducer,
    weeks: weekReducer,
    filter: filterReducer,
  }),
  composeWithDevTools(
    applyMiddleware(actionLogger),
  ),
);
