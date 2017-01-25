const initialFilter = 'React';


export const filterReducer = (filter = initialFilter, action) => {
  switch (action.type) {
    default:
      return filter;
  }
};