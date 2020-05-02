import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const renderMenu = (type) => {
    if (type === 'vendor') {
        return (<Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/inventory">Inventory Data</Nav.Link>
            <Nav.Link href="/company-profile">Company Profile</Nav.Link>
        </Nav>)
    } else if (type === 'facility') {
        return (
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/data">Facility Statistics</Nav.Link>
                <Nav.Link href="/requests">Requests</Nav.Link>
                <Nav.Link href="/facilities-profile">Facility Profile</Nav.Link>
            </Nav>
        )
    } else {
        return (
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/vendors-info">For health Vendors</Nav.Link>
                <Nav.Link href="/facilities-info">For health facilities</Nav.Link>
            </Nav>
        )
    }
}

const Navigation = props => {
    const history = useHistory();

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>WatchTower Community</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {renderMenu(props.type)}
                {
                    !props.type ?
                    <Button href="/login" variant="outline-light">Login</Button>
                    :
                    <Button onClick={() => {
                        props.toggleLogin(false,null);
                        history.push("/")
                    }} variant="outline-light">Log Out</Button>
                }
            </Navbar.Collapse>
        </Navbar>
    )
}


export default Navigation;