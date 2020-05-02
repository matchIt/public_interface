import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useHistory,Link } from 'react-router-dom';

const renderMenu = (type) => {
    if (type === 'vendor') {
        return (<Nav className="mr-auto">
            <Nav.Item>
                <Link to="/" className="nav-link">Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/inventory" className="nav-link">Inventory Data</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/company-profile" className="nav-link">Company Profile</Link>
            </Nav.Item>
        </Nav>)
    } else if (type === 'facility') {
        return (
            <Nav className="mr-auto">
                <Nav.Item>
                    <Link to="/" className="nav-link">Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/data" className="nav-link">Facility Statistics</Link></Nav.Item>
                <Nav.Item>
                    <Link to="/requests" className="nav-link">Requests</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/facilities-profile" className="nav-link">Facility Profile</Link>
                </Nav.Item>
            </Nav>
        )
    } else {
        return (
            <Nav className="mr-auto">
                <Nav.Item>
                    <Link to="/" className="nav-link">Home</Link>
                </Nav.Item>
                <Nav.Item href="/vendors-info">
                    <Link className="nav-link">For health Vendors</Link>
                </Nav.Item>
                <Nav.Item href="/facilities-info">
                    <Link className="nav-link">For health facilities</Link>
                </Nav.Item>
            </Nav>
        )
    }
}

const Navigation = props => {
    const history = useHistory();

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>WatchTower Community </Navbar.Brand>
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