import { getJson } from '../lib/fetch-json';

//Post Load
export const UPDATE_POSTS = 'UPDATE_POSTS';
export const updatePosts = posts => ({ type: UPDATE_POSTS, payload: posts });

export const fetchPosts = () => {
  return (dispatch) => {
    getJson('http://localhost:8000/posts').then((response) => {
      dispatch(updatePosts(response));
    });
  };
};

//Post manipulation
export const VOTE_UP = 'VOTE_UP';
export const upVote = id => ({
  type: VOTE_UP,
  payload: { id },
});

export const SORT_POPULAR = 'SORT_POPULAR';
export const sortPop = () => ({
  type: SORT_POPULAR,
  payload: null,
});

export const SORT_NEW = 'SORT_NEW';
export const sortNew = () => ({
  type: SORT_NEW,
  payload: null,
});
