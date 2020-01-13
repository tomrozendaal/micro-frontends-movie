import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import './App.css'

function App(props) {
  const movie = {
    id: 1,
    title: 'One',
    image:
      'https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SY1000_CR0,0,631,1000_AL_.jpg'
  }

  return (
    <Container id="movie">
      <Jumbotron>
        <h1>{movie.title}</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content
          or information.
        </p>
        <iframe
          className="player"
          src="https://www.youtube.com/embed/cT9mxZUQ2JM"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Jumbotron>
    </Container>
  )
}

export default App
