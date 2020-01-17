import React, { useState, useEffect } from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import { getMovie } from './movie-service'
import './App.css'

function App(props) {
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    getMovie(props.history.match.params.id).then(response => setMovie(response))
  }, [])

  return (
    <Container id="movie">
      {movie && (
        <Jumbotron>
          <h1>{movie.title}</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured
            content or information.
          </p>
          <iframe
            className="player"
            src={movie.video}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Jumbotron>
      )}
    </Container>
  )
}

export default App
