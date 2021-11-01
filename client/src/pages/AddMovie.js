import { useState, useHistory } from "react";
import { Container } from "react-bootstrap";
import { Card, Form, Button } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import axios from "axios";

const AddMovie = () => {
    const [formValues, setFormValues] = useState({});
    const history = useHistory();

    const onChangeFormField = (event) => {
        const { value, name, type } = event.target;

        setFormValues({
            ...formValues,
            [name]: type === "number" ? Number(value) : value
        });
    }

    const onClickSubmit = async () => {
        try {
            await axios({
                url: 'http://localhost:4000/api/movies',
                method: 'POST',
                data: formValues
            });
            history.push('/');
        }
        catch (e) {
            alert("Add Movie Failed!")
        }
    }
    return (
      <Container className="d-flex flex-wrap center m-1">
    <Card >
            <CardHeader>Add Movie</CardHeader>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="title" >
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" onChange={onChangeFormField} name="title"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="poster">
                        <Form.Label>Poster</Form.Label>
                        <Form.Control type="text" onChange={onChangeFormField} name="poster"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="rating">
                        <Form.Label>rating</Form.Label>
                        <Form.Control type="number" onChange={onChangeFormField} name="rating"/>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={onClickSubmit}>
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    </Container>
    )
}

export default AddMovie;