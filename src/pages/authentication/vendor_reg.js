/*
 *
 *This page renders what vendors should see once their logged in.
 *
 */
import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Vendors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    return;
  }

  render() {
    return (
      <Container>
        <Jumbotron className="mt-5">
          <Row className="justify-content-md-center">
            <h2>Vendor Registration</h2>
          </Row>

          <div>
            <Form>
              <Form.Group controlId="formBasicCompany">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" placeholder="Company name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicLocation">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="city" />
              </Form.Group>

              <Form.Group controlId="formBasicLocation">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="state" />
              </Form.Group>

              {/* */}
              <Form.Group controlId="formBasicLocation">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="country" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Company website</Form.Label>
                <Form.Control type="text" placeholder="www.yourcompany.com" />
                <Form.Text className="text-muted">(Optional)</Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Jumbotron>
      </Container>
    );
  }
}

export default Vendors;
