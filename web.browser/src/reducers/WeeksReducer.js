import * as data from '../mock-data';

const initialWeeks = data.data.posts;

export const weekReducer = (weeks = initialWeeks) => weeks;
