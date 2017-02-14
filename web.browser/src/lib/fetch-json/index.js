const createErrorContext = (url, params) => {
  return {
    name: 'FetchJsonError',
    url,
    params,
  };
};

const fetchJson = (url, params = { method: 'GET', credentials: 'include' }) => {
  const headers = { 'Content-Type': 'application/json;charset=UTF-8' };
  return fetch(url, Object.assign(headers, params)).then(res => {
    if (res.ok) return res.json();
    throw createErrorContext(url, params);
  });
};

const requestJson = (url, body, method) => (
  fetchJson(url, { method, body })
)

//API of our library
const getJson = fetchJson;
const postJson = (url, body) => requestJson(url, body, 'POST');
const putJson = (url, body) => requestJson(url, body, 'PUT');
const deleteJson = url => requestJson(url, null, 'DELETE');

export { getJson, postJson, putJson, deleteJson };
