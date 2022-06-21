import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Origin(props) {
  const {
    origin,
  } = props;

  return (
    <Container>
      <Row>
        <Col md={6}>Происхождение:</Col>
        <Col>{ origin }</Col>
      </Row>
    </Container>
  );
}

export default Origin;
