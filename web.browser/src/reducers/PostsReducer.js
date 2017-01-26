import * as data from '../mock-data';
import { VOTE_UP, SORT_POPULAR, SORT_NEW } from '../actions/PostActions';

const initialPosts = data.data.posts;

export const postReducer = (posts = initialPosts, action) => {
  switch (action.type) {
    case VOTE_UP:
      return posts.map((post) => {
        if (post.id !== action.payload.id) return post;
        return { ...post, votes: post.votes + 1 };
      });
    case SORT_POPULAR:
      return posts.slice().sort((a, b) => b.votes > a.votes ? 1 : -1);
    case SORT_NEW:
      return posts.slice().sort((a, b) => b.id > a.id ? 1 : -1);
    default:
      return posts;
  }
};

