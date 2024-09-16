import React from 'react'
import Container from 'react-bootstrap/esm/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <>
      <Navbar className="my_nav" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Products</Link>
            <Link to="/add">Add Product</Link>
            <Link to="/update">Update</Link>
            <Link to="/signup">Sign up</Link>
            <Link to="/logout">Log out</Link>
          </Nav>
          </Container>
      </Navbar>
    </>
  );
}

export default NavBar;