import React from "react";
import { Button, Container, Row, Col, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Publications.css";

const publications = [
  {
    title: "A sample publication title",
    authors: "John Doe and Jane Doe",
    journal: "A sample Journal",
    year: 2024,
    link: "#",
  },
  {
    title: "Another sample publication title",
    authors: "Daniel Was Here",
    journal: "They may not notice IEEE",
    year: 2024,
    link: "#",
  },
];

const categories = [
  "Journals",
  "Conferences",
  "Book Chapters",
  "Workshops",
  "Technical Reports",
  "Patents",
];

const Publications: React.FC = () => {
  return (
    <Container className="publications-container">
      <Row className="mb-4">
        {categories.map((category, index) => (
          <Col key={index}>
            <Button variant="outline-primary" className="category-button">
              {category}
            </Button>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <h2>Publications</h2>
          <ListGroup variant="flush">
            {publications.map((publication, index) => (
              <ListGroup.Item key={index}>
                <strong>{publication.authors}</strong>, "{publication.title},"{" "}
                <i>{publication.journal}</i>, {publication.year}{" "}
                <a href={publication.link}>
                  <img src="path/to/pdf_icon.png" alt="PDF" />
                </a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Publications;
