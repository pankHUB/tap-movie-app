import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBar = (props) => {
    return (
        <section className="container d-flex m-1">
        <Form.Control type="text" placeholder="search for movie" />
        <Button variant="danger" className="me-1">Search</Button>
        <Button variant="danger" onClick={props.onClickRefresh}>Refresh</Button>
        </section>
    )
}

export default SearchBar;


