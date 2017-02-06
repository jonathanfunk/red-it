import { getJson } from '../lib/fetch-json';

//Week Load
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const getCategories = categories => ({ type: GET_CATEGORIES, payload: categories });

export const fetchCategories = () => dispatch => (
  getJson('http://localhost:8000/api/categories').then((response) => {
    dispatch(getCategories(response));
  })
);