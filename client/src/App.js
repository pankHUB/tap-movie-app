import { Card, Container, Button } from "react-bootstrap";

import Header from "./components/Header.js";
import SearchBar from "./components/SearchBar.js";
import {movies}  from "./constants/movies";

function App() {
  return (
    <>
      <Header/>
      <Container >
      <SearchBar/>
      <div className="container d-flex m-2 flex-wrap">
      { movies.map(movies => {
        return (
          <Card style={{ width: '20rem' }} className="m-2">
            <Card.Img variant="top" src={movies.poster} />
            <Card.Body>
              <Card.Title>{movies.title}</Card.Title>
              <div>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </div>
              <Button variant="danger">Add</Button>
            </Card.Body>
          </Card>
        )
      })}
      </div>
      </Container>
    </>
  );
}

export default App;
