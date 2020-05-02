/*
 *
 *This page renders what vendors should see once their logged in.
 *
 */
import React from "react";
import { Container, Row} from 'react-bootstrap';

class VendorHome extends React.Component {
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

export default VendorHome
