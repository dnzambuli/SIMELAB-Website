import React from "react";
import { ListGroup, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Datasets.css";

const Code: React.FC = () => {
  return (
    <Container className="code-container">
      <h1>Code Tutorials</h1>
      <ListGroup>
        <ListGroup.Item hrefLang="google.com">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </ListGroup.Item>
        <ListGroup.Item hrefLang="google.com">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dolores
          delectus ipsam quod et laudantium doloremque dolorum vel velit
          deserunt!.
        </ListGroup.Item>
        <ListGroup.Item hrefLang="google.com">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          illum aut exercitationem veniam pariatur, minima ullam modi, velit vel
          impedit quos nobis tenetur?
        </ListGroup.Item>
        <ListGroup.Item hrefLang="google.com">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
          adipisci dolores molestias tenetur sit rerum!
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Code;
