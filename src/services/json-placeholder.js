const _baseUrl = 'https://jsonplaceholder.typicode.com/todos'

const prepParams = params => {
  return Object.keys(params).map((key) => {
    return `${key}=${encodeURIComponent(params[key])}`
  }).join('&')
}

export const getTodosUrl = queryParams => `${_baseUrl}?${prepParams(queryParams)}`
