import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">NS Perfume</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/perfumes">Perfumes</Nav.Link>
              <Nav.Link as={Link} to="/add">Add Perfume</Nav.Link>
              <Nav.Link as={Link} to="manage">Manage </Nav.Link>
              <Nav.Link as={Link} to="myItem">My Items</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/signOut">Sign Out</Nav.Link>
              <Nav.Link as={Link} to="/signUp">Sign Up</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              
              <Nav.Link as={Link} to="/about" >
                About
              </Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
