import {
  VOTE_UP,
  SORT_POPULAR,
  SORT_NEW,
  UPDATE_POSTS,
} from '../actions/PostActions';

export const postReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_POSTS:
      return [...state, ...action.payload];
    case VOTE_UP:
      return state.map((post) => {
        if (post.postid !== action.payload.postid) return post;
        return { ...post, votes: post.votes + 1 };
      });
    case SORT_POPULAR:
      return [...state].sort((a, b) => b.votes > a.votes ? 1 : -1);
    case SORT_NEW:
      return [...state].sort((a, b) => b.postid > a.postid ? 1 : -1);
    default:
      return state;
  }
};

