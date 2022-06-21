import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Template(props) {
  const {
    template,
  } = props;

  return (
    <Container>
      <Row>
        <Col md={6}>Образ:</Col>
        <Col>{ template }</Col>
      </Row>
    </Container>
  );
}

export default Template;
