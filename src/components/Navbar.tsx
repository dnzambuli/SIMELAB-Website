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
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/projects" className="nav-link">
            Projects
          </NavLink>
          <NavLink to="/publications" className="nav-link">
            Publications
          </NavLink>
          <NavLink to="/datasets" className="nav-link">
            Datasets
          </NavLink>
          <NavLink to="/code" className="nav-link">
            Code
          </NavLink>
          <NavLink to="/videos" className="nav-link">
            Videos
          </NavLink>
          <NavLink to="/lectures" className="nav-link">
            Lectures
          </NavLink>
          <NavLink to="/aboutus" className="nav-link">
            About us
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
