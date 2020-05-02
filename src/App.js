import React,{useState} from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Container, Button, Jumbotron, Row, Navbar,NavDropdown,Nav } from 'react-bootstrap';
import Facility from "./pages/authentication/facility_reg";
import Vendor from "./pages/authentication/vendor_reg";
import Login from './pages/authentication/Login.js';
import Greeting from "./pages/Greeting";
import Facility_Home from "./pages/facilities/Facility-home";
import Vendor_Home from "./pages/vendors/Vendor-home";
import Navigation from './components/Navigation';

const renderInterface = (type)=> {
  if(type === 'vendor'){
    return <Vendor_Home />
  }
  return <Facility_Home />
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      type: null
    }
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin(value,account_type){
    this.setState({loggedIn: value,type: account_type });
  }

  render() {
    return (
      <Router>
        <Navigation type={this.state.type} toggleLogin={this.toggleLogin}/>
        <Container>
          <Row className="justify-content-md-center">
              <Switch>
                <Route path="/signup-vendor">
                  <Vendor />
                </Route>
                <Route path="/signup-facility">
                  <Facility />
                </Route>
                <Route path="/login">
                  <Login login={this.toggleLogin}/>
                </Route>
                <Route path="/">
                  {
                    this.state.loggedIn ?
                    renderInterface(this.state.type)
                    :
                    <Greeting />
                  }
                </Route>
              </Switch>
          </Row>
      </Container>
      </Router>
    );
  }
}

export default App;
