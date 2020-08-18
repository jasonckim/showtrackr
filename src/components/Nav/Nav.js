import React from 'react';
import './Nav.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

class Navigation extends React.Component {
  render(){
    return(
      <div className="nav">
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={2} sm={3}>
              <div className="logo">Show<span id="track">Trackr</span></div>
            </Col>
            <Col xs={8} sm={6}>
              <a href="#features" className="nav_links">Features</a>
              <a href="#community" className="nav_links">Community</a>
              <a href="#start" className="nav_links">Get Started</a>
            </Col>
            <Col xs={2} sm={3} className="login-padding">
              <a href="##" className="nav_login">Log In</a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Navigation;


// <Navbar>
//   <Navbar.Brand href="#home"><div className="logo">Show<span id="track">Trackr</span></div></Navbar.Brand>
//   <Nav className="mr-auto">
//     <Nav.Link href="#features" className="nav_links"><span className="nav_links">Features</span></Nav.Link>
//     <Nav.Link href="#community" className="nav_links"><span className="nav_links">Community</span></Nav.Link>
//     <Nav.Link href="#start" className="nav_links"><span className="nav_links">Get Started</span></Nav.Link>
//     <Nav.Link href="##" className="nav_links"><span className="nav_login">Log In</span></Nav.Link>
//   </Nav>
// </Navbar>
