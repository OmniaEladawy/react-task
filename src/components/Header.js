import React from "react";
import logo from "../imgs/logo.jpg";
import {Navbar,Container,Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Header(){
  return(
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} alt="logo" style={{width:100}}/>  </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }} 
          >
            <NavLink to="/home" className="fw-bold fs-5">Home</NavLink>
            <NavLink to="/posts" className="fw-bold fs-5">Posts</NavLink>
            <NavLink to="/profile" className="fw-bold fs-5">Profile</NavLink>
            <NavLink to="/login" className="fw-bold fs-5">Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;