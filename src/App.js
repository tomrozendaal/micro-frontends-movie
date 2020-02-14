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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt dui sapien, quis facilisis nisi
            imperdiet vitae. Vestibulum finibus magna a diam pulvinar, sit amet pulvinar lacus tincidunt. Nulla iaculis
            auctor metus nec vehicula. Mauris a purus eu risus semper egestas. Nunc ultricies odio felis, vitae
            dignissim mauris dapibus nec.
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
