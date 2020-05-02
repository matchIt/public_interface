import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Facility from "./pages/authentication/facility_reg";
import Vendor from "./pages/authentication/vendor_reg";
import Login from './pages/authentication/Login.js';
import Greeting from "./pages/Greeting";
import Facility_Home from "./pages/facilities/Facility-home";
import VendorHome from "./pages/vendors/VendorHome";
import Navigation from './components/Navigation';
import Inventory from "./pages/vendors/Inventory";
import Vendors_Profile from './pages/vendors/Profile';
import Statistics from './pages/facilities/Statistics';
import Requests from './pages/facilities/Requests';
import Facilities_Profile from './pages/facilities/Profile';

const renderInterface = (type) => {
  if (type === 'vendor') {
    return <VendorHome />
  }
  return <Facility_Home />
}

const renderCustomRoutes = type => {
  if (type === 'vendor') {
    return (
      <>
        <Route path="/inventory">
          <Inventory />
        </Route>
        <Route path="/company-profile">
          <Vendors_Profile />
        </Route>
      </>
    )
  } else if (type === 'facility') {
    return (
      <>
        <Route path="/data">
          <Statistics />
        </Route>
        <Route path="/requests">
          <Requests />
        </Route>
        <Route path="/company-profile">
          <Facilities_Profile />
        </Route>
      </>
    )
  } else {
    return
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      type: null //type of user: facility or vendor
    }
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin(value, account_type) {
    this.setState({ loggedIn: value, type: account_type });
  }

  render() {
    return (
      <Router>
        <Navigation type={this.state.type} toggleLogin={this.toggleLogin} />
        <div>
          <div className="justify-content-md-center">
            <Switch>
              {renderCustomRoutes(this.state.type)}
              {/* default routes */}
              <Route path="/signup-vendor">
                <Vendor />
              </Route>
              <Route path="/signup-facility">
                <Facility />
              </Route>
              <Route path="/login">
                <Login login={this.toggleLogin} />
              </Route>
              <Route path="/">
                {
                  this.state.loggedIn ?
                    renderInterface(this.state.type) //render interface based on account type
                    :
                    <Greeting />
                }
              </Route>
              <Route path="*">
                <p>Invalid route: 404</p>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
