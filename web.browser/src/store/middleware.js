export const actionLogger = theStore => next => (action) => {
  console.log('h1')
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
