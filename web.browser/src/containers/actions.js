import * as data from '../mock-data';

const initialPosts = data.data.posts;

export const VOTE_UP = 'VOTE_UP';
export const upVote = id => ({
  type: VOTE_UP,
  payload: { id }, //payload = object
});

const SORT_POP = 'SORT_POP';
const sortPop = () => ({
  type: SORT_POP,
  payload: {}, //payload = object
});

const SORT_NEW = 'SORT_NEW';
const sortNew = () => ({
  type: SORT_NEW,
  payload: {}, //payload = object
});

export const reducer = (posts = initialPosts, action) => {
  switch (action.type) {
    case VOTE_UP:
      return posts.map((post) => {
        if (parseInt(post.id) !== action.payload.id) return post;
        return { ...post, votes: post.votes + 1 }
      });
    case SORT_POP:
      return posts.sort((a, b) => b.votes > a.votes ? 1 : -1);
    case SORT_NEW:
      return posts.sort((a, b) => b.id > a.id ? 1 : -1);
    default:
      return posts;
  }
};
