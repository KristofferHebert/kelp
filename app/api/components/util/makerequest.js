import 'whatwg-fetch'

let defaultOptions = {
  headers: {
    'Accept': 'application/json'
  }
}

function makeRequest (endpoint, userOptions) {
  let options = Object.assign(defaultOptions, userOptions)

  if (options.method === 'get' || options.method === 'GET') {
    delete options.body
  }
  return fetch(endpoint, options)
  .then(function (response) {
    return response.json()
  }).then(function (json) {
    return json
  }).catch(function (ex) {
    console.log('parsing failed', ex)
  })
}

export default makeRequest
