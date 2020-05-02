import React from 'react';
import { Container, Row, Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Greeting() {
    return (
      <Container className="mt-5">
        <Jumbotron>
          <Row className="justify-content-md-center">
            <h2>MatchIT Registration</h2>
          </Row>
  
          <Row className="justify-content-md-center">
            <p>Are you a vendor or a health facility?</p>
          </Row>
  
          <Row className="justify-content-md-center">
            <Link to="/signup-vendor" className="">
              <Button variant="primary">I'm a Vendor</Button>
            </Link>
  
            <Link to="/signup-facility" className="ml-2">
              <Button variant="secondary">I'm a Facility</Button>
            </Link>
          </Row>
        </Jumbotron>
      </Container>
    );
  }

  export default Greeting
  