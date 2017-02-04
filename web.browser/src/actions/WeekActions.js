import { getJson } from '../lib/fetch-json';

//Week Load
export const UPDATE_WEEKS = 'UPDATE_WEEKS';
export const updateWeeks = weeks => ({ type: UPDATE_WEEKS, payload: weeks });

export const fetchWeeks = () => {
  return (dispatch) => {
    getJson('http://localhost:8000/api/weeks').then((response) => {
      dispatch(updateWeeks(response));
    });
  };
};