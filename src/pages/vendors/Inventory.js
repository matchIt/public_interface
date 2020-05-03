import React from "react";
import { Container, Row, Jumbotron, Col, Button } from "react-bootstrap";
import Item from "../../components/Item";

const Inventory = props => {
  return (
    <Container>
      <Jumbotron className="mt-5 mx-auto px-5">
        <div>
          <Row className="justify-content-md-center">
            <h4>Here's your inventory!</h4>
          </Row>
        </div>

        {/*<div>
          <Row className="justify-content-md-center mt-5">
            <h5>What do you want to do today?</h5>
          </Row>

          <Row>
            <Col className="justify-content-md-center mt-5">
              <a href="">
                <Button variant="primary">Add Item to Inventory</Button>
              </a>
            </Col>
            <Col className="justify-content-md-center mt-5">
              <a href="">
                <Button variant="secondary">Edit Item in Inventory</Button>
              </a>
            </Col>
            <Col className="justify-content-md-center mt-5">
              <a href="">
                <Button variant="danger">Remove Item from Inventory</Button>
              </a>
            </Col>
          </Row>
        </div>*/}

        <div>
          <div className="mt-5">
            <Row>
              <Col>
                <h3>Item</h3>
              </Col>
              <Col>
                <h3>Type/Brand</h3>
              </Col>
              <Col>
                <h3>Quantity</h3>
              </Col>
              <Col>
                <h3>Remove</h3>
              </Col>
            </Row>
          </div>
          <Item name="Ventilator" type="Time cycled" quantity="200" />
          <Item name="Masks" type="N95" quantity="100000" />
          <Item name="Beds" type="Movable" quantity="10" />
          <Item name="Ventilator" type="Volume cycled" quantity="10" />
        </div>
      </Jumbotron>
    </Container>
  );
};

export default Inventory;
