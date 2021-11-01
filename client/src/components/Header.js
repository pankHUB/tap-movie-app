import React from 'react';


import { Navbar, Container, Nav  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="primary" variant="light" expand="lg">
            <Container className='fluid'>
                <Link to="/" className='navbar-brand nav-link'>Movie App</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" active className='nav-link'>Home</Link>
                    <Link to="/add-movie" className='nav-link' active>Link</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;

