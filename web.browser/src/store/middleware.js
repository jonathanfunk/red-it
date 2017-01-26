export const actionLogger = theStore => next => (action) => {
  let result;
  console.info('DISPATCHING', action);
  try {
    result = next(action);
    console.info('NEXT STATE', theStore.getState());
  } catch (e) {
    console.warn('There was an error', e);
    throw e;
  }
  return result;
};
