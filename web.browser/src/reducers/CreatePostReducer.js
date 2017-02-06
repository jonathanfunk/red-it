import { GET_CATEGORIES } from '../actions/CreatePostActions';

export const createPostReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};