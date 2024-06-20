// src/components/Navbar.tsx
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // to interact with the navbars
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";

const CustomNavbar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="src\assets\usiu logo.png"
          height="100"
          className="d-inline-block align-top"
          alt="USIU LOGO"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink href="#home" className="nav-link">
            Home
          </NavLink>
          <NavLink href="/projects" className="nav-link">
            Projects
          </NavLink>
          <NavLink href="#publications" className="nav-link">
            Publications
          </NavLink>
          <NavLink href="#datasets" className="nav-link">
            Datasets
          </NavLink>
          <NavLink href="#code" className="nav-link">
            Code
          </NavLink>
          <NavLink href="#videos" className="nav-link">
            Videos
          </NavLink>
          <NavLink href="#lectures" className="nav-link">
            Lectures
          </NavLink>
          <NavLink href="#aboutus" className="nav-link">
            About us
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
