/*
 *
 *This page renders what vendors should see once their logged in.
 *
 */
import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Vendors extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <h2>Welcome Vendor!</h2>
        </Row>
      </Container>
    );
  }
}
