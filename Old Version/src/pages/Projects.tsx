// src/pages/Projects.tsx
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.css";

const projectData = [
  { imgSrc: "path/to/image1.png", title: "Project 1" },
  { imgSrc: "path/to/image2.png", title: "Project 2" },
  { imgSrc: "path/to/image3.png", title: "Project 3" },
  { imgSrc: "path/to/image4.png", title: "Project 4" },
  { imgSrc: "path/to/image5.png", title: "Project 5" },
  { imgSrc: "path/to/image6.png", title: "Project 6" },
  { imgSrc: "path/to/image7.png", title: "Project 7" },
  { imgSrc: "path/to/image8.png", title: "Project 8" },
];

const Projects: React.FC = () => {
  return (
    <Container className="projects-container">
      <Row>
        {projectData.map((project, index) => (
          <Col key={index} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={project.imgSrc} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
