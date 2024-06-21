// src/pages/Videos.tsx
import React from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Videos.css";

const Videos: React.FC = () => {
  return (
    <Container className="videos-container">
      <Carousel className="mb-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="path/to/your/carousel-image1.jpg"
            alt="The Rise and Fall of Network Stars"
          />
          <Carousel.Caption>
            <h3>THE RISE AND FALL OF NETWORK STARS</h3>
            <p>
              Trends change rapidly in today's world and are readily observed in
              lists of most important people, rankings of global companies,
              infectious disease patterns, political opinions, and popularities
              of online social networks. A key question arises: What is the
              mechanism behind the emergence of new trends? To answer this
              question, we employed state-of-the-art data science tools and
              extensive cloud computing resources to create this massive corpora
              that contains 38,000 real-world networks and 2.5 million graphs.
            </p>
            <Button variant="primary">Learn more</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="path/to/your/carousel-image2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="path/to/your/carousel-image3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Img variant="top" src="path/to/your/video-thumbnail1.jpg" />
            <Card.Body>
              <Card.Title>FAKE PROFILE IDENTIFICATION</Card.Title>
              <Button variant="primary">Watch</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Img variant="top" src="path/to/your/video-thumbnail2.jpg" />
            <Card.Body>
              <Card.Title>THE RISE AND FALL OF NETWORK STARS</Card.Title>
              <Button variant="primary">Watch</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Videos;
