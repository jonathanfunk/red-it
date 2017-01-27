const fetchJson = (url, params = { method: 'GET' }) => {
  const headers = { 'Content-Type': 'application/json; charset' }
  return fetch(url, Object.assign(headers)).then(res => {
    if (res.ok) return res.json();
    throw createErrorContext(url, params);
  });
};

const requestJson = (url, body, method) => (
  fetchJson(url, { method, body })
)

const createErrorContext = (url, params) => {
  return {
    name: 'FetchJsonError',
    url,
    params,
  };
};

//API of our library
const getJson = fetchJson;
const postJson = (url, body) => requestJson(url, body, 'POST');
const putJson = (url, body) => requestJson(url, body, 'PUT');
const deleteJson = url => requestJson(url, null, 'DELETE');

export { getJson, postJson, putJson, deleteJson };
