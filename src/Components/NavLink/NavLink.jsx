import "./NavLink.css";
import React from "react";
import { Nav } from "react-bootstrap";

function NavLink(props) {
  console.log(props.color)
  const links = [
    {href : '#about', value : "About"},
    {href : '#service', value : "Service"},
    {href : '#project', value : "Projects"},
  ]
  return (
    <Nav className="ms-auto">
      {
        links.map(({href , value}) => (
          <Nav.Link href={href} className="link" style={{color : props.color }}>{value}</Nav.Link>
        ))
      }
    </Nav>
  );
};

export default NavLink;
