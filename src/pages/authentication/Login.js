import React, {useRef } from 'react';
import { Jumbotron, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Login = props => {
    const history  = useHistory();
    const typeRef = useRef();

    return (
        <Jumbotron className="mt-5 px-5 col-8">
            <h3>Log into your account</h3>
            <Form>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required placeholder="Your email address" />
                </Form.Group>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control as="select" ref={typeRef}>
                        <Form.Control as="option">Vendor</Form.Control>
                        <Form.Control as="option">Facility</Form.Control>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required />
                </Form.Group>
                <Button onClick={() => {
                    var type = typeRef.current.selectedOptions[0].value.toLowerCase();
                    props.login(true, type);
                    history.push("/")
                }}>Log in</Button>
            </Form>
        </Jumbotron>

    )
}

export default Login;