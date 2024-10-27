/* eslint-disable no-undef */
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css"; // Ensure this path is correct
import { Link } from "react-router-dom";
import $ from "jquery";
import axios from "axios";

const NavBar = () => {
  const userRole = localStorage.getItem("userRole");

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/">
            Learn Nest
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/">
              Home &nbsp; |
            </Nav.Link>
            <Nav.Link as={Link} to="/nav-courses">
              Courses &nbsp; |
            </Nav.Link>
            <Nav.Link as={Link} to="/nests">
              Nests &nbsp; |
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us &nbsp; |
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us &nbsp; |
            </Nav.Link>
            <Nav.Link as={Link} to="/adminpanel">
              Admin Panel
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;





