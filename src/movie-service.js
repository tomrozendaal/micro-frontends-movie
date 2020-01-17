const URL = 'https://api.myjson.com/bins/6lvgu'

export function getMovies() {
  return fetch(URL).then(response => {
    return response.json()
  })
}

export function getMovie(id) {
  return fetch(URL)
    .then(response => {
      return response.json()
    })
    .then(json => {
      return json.find(movie => movie.id == id)
    })
}
