import React from "react";
import { Container, Jumbotron, Row, Button, Col } from "react-bootstrap";

class Item extends React.Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <div>
            <Row>
              <Col>
                <p>{this.props.name}</p>
              </Col>

              <Col>
                <p>{this.props.type}</p>
              </Col>
              <Col>
                <p>{this.props.quantity}</p>
              </Col>
              <Col>
                <Button variant="danger">Remove</Button>
              </Col>
            </Row>
          </div>
        </Jumbotron>
      </Container>
    );
  }
}

export default Item;
