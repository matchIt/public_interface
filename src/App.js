import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Facility from "./pages/authentication/facility_reg";
import Vendor from "./pages/authentication/vendor_reg";
// import Col from "react-bootstrap/Col";

class App extends React.Component {
  render() {
    return (
      <Container>
        <Jumbotron className="mt-5">
          <Row className="justify-content-md-center">
            <Router>
              <Switch>
                <Route path="/vendor">
                  <Vendor />
                </Route>
                <Route path="/facility">
                  <Facility />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Router>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

function Home() {
  return (
    <Container>
      <div>
        <Row className="justify-content-md-center">
          <h2>MatchIT Registration</h2>
        </Row>

        <Row className="justify-content-md-center">
          <p>Are you a vendor or a health facility?</p>
        </Row>

        <Row className="justify-content-md-center">
          <Link to="/vendor" className="">
            <Button variant="primary">I'm a Vendor</Button>
          </Link>

          <Link to="/facility" className="ml-2">
            <Button variant="secondary">I'm a Facility</Button>
          </Link>
        </Row>
      </div>
    </Container>
  );
}

export default App;
