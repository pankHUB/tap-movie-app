import { useState , useEffect } from "react";
import { Card, Button} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";


import SearchBar from "../components/SearchBar";

const { default: Loader } = require("../components/Loader");




const Home = () => {
    const [movies, setMovies] = useState([]);
  const [loading,setLoding] = useState(false);
  //const [error , setError ] = useState(null);
  const history = useHistory()
  const fetchMovies = async() =>{
    try {
      setLoding(true);
      const response  = await axios("http://localhost:4000/api/movies");
      setMovies(response.data);
      setLoding(false)
    } 
    catch (e) {
      console.log(e.message);
    }
    
  }

  useEffect(() => {
    fetchMovies();
  },[]);

  const onClickAddMovie = (movie) => {
    history.push(`Id : ${movie.id} Title : ${movie.title}` );

  }
    return (
      <>
      <SearchBar onClickRefresh ={fetchMovies}/>
      
      {!loading ?<div className="container  d-flex m-1 flex-wrap">
      {movies.map( (movie) => {
        const {title, poster} = movie;
         return(
          <Card style={{ width: '16rem' }} className="p-1 m-2" >
            <Card.Img variant="top" src={poster} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <div>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </div>
              <Button variant="danger" onClick={()=>onClickAddMovie(movie)}>Movie Detail</Button>
            </Card.Body>
          </Card>
         
        )
      })
      }
      </div>:
      <Loader/>}
      </>
    )
  }

export default Home;