import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand className="cas_logo">
          <img
            src="./brand.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Cascavel Logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
  );
};
export default Navigation;
