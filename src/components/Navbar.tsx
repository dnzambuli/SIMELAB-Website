// src/components/Navbar.tsx
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
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
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#publications">Publications</Nav.Link>
          <Nav.Link href="#datasets">Datasets</Nav.Link>
          <Nav.Link href="#code">Code</Nav.Link>
          <Nav.Link href="#videos">Videos</Nav.Link>
          <Nav.Link href="#lectures">Lectures</Nav.Link>
          <Nav.Link href="#aboutus">About us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
