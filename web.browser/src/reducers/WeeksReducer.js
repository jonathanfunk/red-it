import { UPDATE_WEEKS } from '../actions/WeekActions';

export const weekReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_WEEKS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
