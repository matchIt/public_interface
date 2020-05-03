/*
 *
 *This page renders what vendors should see once their logged in.
 *
 */
import React from "react";
import { Container, Row, Jumbotron, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class VendorHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "WatchTowerer2756"
    };
  }
  render() {
    return (
      <Container>
        <Jumbotron className="mt-5 mx-auto px-5">
          <div>
            <Row className="justify-content-md-end">
              <h4>Welcome {this.state.name}!</h4>
            </Row>
            <Row className="justify-content-md-center mt-5">
              <h5>What do you want to do today?</h5>
            </Row>
          </div>

          <div>
            <Row className="justify-content-md-center mt-5">
              <a href="">
                <Button variant="primary">Add Item to Inventory</Button>
              </a>
            </Row>
            <Row className="justify-content-md-center mt-5">
              <a href="">
                <Button variant="secondary">Edit Item in Inventory</Button>
              </a>
            </Row>
            <Row className="justify-content-md-center mt-5">
              <a href="">
                <Button variant="danger">Remove Item from Inventory</Button>
              </a>
            </Row>
          </div>
        </Jumbotron>
      </Container>
    );
  }
}

export default VendorHome;
