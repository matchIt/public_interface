import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

class App extends React.Component {
  render() {
    return (
      <Container>
        <Jumbotron className="mt-5">
          <div>
            <Row className="justify-content-md-center">
              <h2>MatchIT Registration</h2>
            </Row>

            <Row className="justify-content-md-center">
              <p>Are you a vendor or a health facility?</p>
            </Row>
          </div>

          <Row className="justify-content-md-center">
            <Router>
              <Link to="/" className="">
                <Button variant="secondary">I'm a Vendor</Button>
              </Link>

              <Link to="/" className="ml-2">
                <Button variant="primary">I'm a Facility</Button>
              </Link>
            </Router>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default App;
