import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from 'react-router-dom'

function NavBar() {

  const auth = localStorage.getItem('user')
  const navigate = useNavigate()

  const logout = ()=>{
    localStorage.clear();
    navigate('/signup')
  }

  return (
    <>
      <Navbar className="my_nav" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Products</Link>
            <Link to="/add">Add Product</Link>
            <Link to="/update">Update</Link> 
            { 
            auth ? <Link onClick={logout} to="/signup">Log out ({JSON.parse(auth).name})</Link> : 
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign up</Link> 
            </> 
            }
          </Nav>
          </Container>
      </Navbar>
    </>
  );
}

export default NavBar;