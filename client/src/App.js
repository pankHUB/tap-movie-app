import { useState , useEffect } from "react";
import { Card, Container, Button } from "react-bootstrap";
import axios from "axios";

import Header from "./components/Header.js";
import SearchBar from "./components/SearchBar.js";
const HEG = [{
  id : 1,
  title : 'Ironman',
  poster : '',
  rating : 8
},{
  id : 2,
  title : 'Spiderman',
  poster : '',
  rating : 7  
},{
  id : 3,
  title : 'Batman',
  poster : '',
  rating : 9
},{
  id : 4,
  title : 'Superman',
  poster : '',
  rating : 8
},{
  id : 5,
  title : 'Tenet',
  poster : '',
  rating : 8.5  
}];


function App() {
  const [movies, setMovies] = useState([]);
  const [error , setError ] = useState(null);
  const fetchMovies = async() =>{
    try {
      const response  = await axios("http://localhost:4000/movies");
      console.log(response.data)
      setMovies(response.data); 
    } 
    catch (e) {
      setError("Server Error");
    }
    
  }

  useEffect(() => {
    fetchMovies();
  },[])
  return (
    <>
      <Header/>
      <Container >
      <SearchBar/>
      <div className="container d-flex m-2 flex-wrap">
      {error && <alert variant ="danger"></alert>}
      {movies.map( (movie) => {
        const { title, id ,poster} = movie;
         return(
          <Card style={{ width: '16rem' }} className="m-2">
            <Card.Img variant="top" src={poster} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
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
