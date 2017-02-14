export const FILTER = 'FILTER';
export const filterCategory = category => ({
  type: FILTER,
  payload: { category },
});
