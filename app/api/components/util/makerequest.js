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
  .then(response => {
    return response.json().then(text => {
      return response.ok ? text : Promise.reject(text)
    })
  })
}

export default makeRequest
