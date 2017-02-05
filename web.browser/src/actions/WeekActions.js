import { getJson } from '../lib/fetch-json';

//Week Load
export const UPDATE_WEEKS = 'UPDATE_WEEKS';
export const updateWeeks = weeks => ({ type: UPDATE_WEEKS, payload: weeks });

const weekRequest = {
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
};

export const fetchWeeks = () => dispatch => (
    getJson('http://localhost:8000/api/weeks', weekRequest).then((response) => {
      dispatch(updateWeeks(response));
    })
);

