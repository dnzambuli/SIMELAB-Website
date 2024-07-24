// src/pages/Datasets.tsx
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Datasets.css";

const datasetData = [
  { imgSrc: "path/to/image1.png", title: "Dataset 1" },
  { imgSrc: "path/to/image2.png", title: "Dataset 2" },
  { imgSrc: "path/to/image3.png", title: "Dataset 3" },
  { imgSrc: "path/to/image4.png", title: "Dataset 4" },
  { imgSrc: "path/to/image5.png", title: "Dataset 5" },
  { imgSrc: "path/to/image6.png", title: "Dataset 6" },
  { imgSrc: "path/to/image7.png", title: "Dataset 7" },
  { imgSrc: "path/to/image8.png", title: "Dataset 8" },
];

const Datasets: React.FC = () => {
  return (
    <Container className="datasets-container">
      <Row>
        {datasetData.map((dataset, index) => (
          <Col key={index} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={dataset.imgSrc} />
              <Card.Body>
                <Card.Title>{dataset.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Datasets;
