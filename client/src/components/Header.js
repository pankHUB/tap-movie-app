import React from 'react';


import { Navbar, Container, Nav  } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="primary" variant="light" expand="lg">
            <Container className='fluid'>
                <Navbar.Brand href="#home">Movie App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" active>Home</Nav.Link>
                    <Nav.Link href="#link" active>Link</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;

