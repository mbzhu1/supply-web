import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown, { DropdownDivider } from "react-bootstrap/Dropdown";
import { useAuth } from "./../util/auth.js";

function NavbarCustom(props) {
  const auth = useAuth();

  return (
    <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              className="d-inline-block align-top"
              src={props.logo}
              alt="Logo"
              height="100"
            ></img>
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="border-0"
        ></Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
              <NavDropdown id="dropdown" title="Menu" alignRight={true}>
                <LinkContainer to="/about">
                  <NavDropdown.Item active={false}>About</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/faq">
                  <NavDropdown.Item active={false}>FAQ</NavDropdown.Item>
                </LinkContainer>
                <Dropdown.Divider></Dropdown.Divider>
                <NavDropdown.Item active={false} 
                  onClick={() => {
                    window.open("https://www.figma.com/file/ZKLx5jHVJ6YfWGg2PPETNv/PlexHacks", "_blank")
                  }}>
                  Designs</NavDropdown.Item>
                  <NavDropdown.Item active={false} 
                  onClick={() => {
                    window.open("https://github.com/mbzhu1/supply", "_blank")
                  }}>
                  Code</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
