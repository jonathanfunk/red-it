export const VOTE_UP = 'VOTE_UP';
export const upVote = id => ({
  type: VOTE_UP,
  payload: { id },
});

export const SORT_POP = 'SORT_POP';
export const sortPop = () => ({
  type: SORT_POP,
  payload: {},
});

export const SORT_NEW = 'SORT_NEW';
export const sortNew = () => ({
  type: SORT_NEW,
  payload: {}, 
});
