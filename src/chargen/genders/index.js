import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Gender(props) {
  const {
    gender,
  } = props;

  return (
    <Container>
      <Row>
        <Col md={6}>Пол:</Col>
        <Col>{ gender }</Col>
      </Row>
    </Container>
  );
}

export default Gender;
