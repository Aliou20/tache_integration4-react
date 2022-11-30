import "./NavBar.css";
import React from "react";
import {Container, Navbar } from "react-bootstrap";
import NavLink from "../NavLink/NavLink";

function NavBar() {
  return (
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#ater" className="header_logo ">Sunnyside</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="header_toggle" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavLink  color = "white"/>
            <button bg="white" className="btn_contact"> Contact</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
  );
};

export default NavBar;
