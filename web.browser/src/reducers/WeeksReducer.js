import * as data from '../mock-data';

const initialWeeks = data.data.weeks;

export const weekReducer = (weeks = initialWeeks) => weeks;
