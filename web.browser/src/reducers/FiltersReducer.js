import { FILTER } from './../actions/FilterActions';

const initialState = 'React';

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      return action.payload.category;
    default:
      return state;
  }
};