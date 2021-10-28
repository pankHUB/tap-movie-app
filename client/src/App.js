import { Card, Container, Button } from "react-bootstrap";

import Header from "./components/Header.js";
import SearchBar from "./components/SearchBar.js";
import {movies}  from "./constants/movies";

function App() {
  return (
    <>
      <Header/>
      <Container className="mt-3">
      <SearchBar/>
      { movies.map(movies => {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movies.poster} />
            <Card.Body>
              <Card.Title>{movies.title}</Card.Title>
              
              <Button variant="primary">Add</Button>
            </Card.Body>
          </Card>
        )
      })};
      </Container>
    </>
  );
}

export default App;
