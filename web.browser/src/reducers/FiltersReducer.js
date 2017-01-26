import { FILTER } from './../actions/FilterActions';

const initialFilter = 'React';

export const filterReducer = (filter = initialFilter, action) => {
  switch (action.type) {
    case FILTER:
      return action.payload;
    default:
      return filter;
  }
};