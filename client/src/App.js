
import {  Container } from "react-bootstrap";
import { BrowserRouter,  } from "react-router-dom";




import Header from "./components/Header.js";
import Routes from "./pages/Routes.js";




function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Container className="">
        <Routes/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
