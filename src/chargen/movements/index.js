import React, { useMemo } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";

function Movement(props) {
  const { movement } = props;

  const movementColors = useMemo(() => ({
    'Красное': 'danger',
    'Белое': 'light',
    'Зелёное': 'success',
    'Чёрное': 'dark',
  }), []);

  const movementTextColors = useMemo(() => ({
    'Красное': 'light',
    'Белое': 'dark',
    'Зелёное': 'light',
    'Чёрное': 'light',
  }), []);

  const bg = useMemo(() => {
    return movementColors[movement];
  }, [movement, movementColors]);

  const text = useMemo(() => {
    return movementTextColors[movement];
  }, [movement, movementTextColors]);

  return (
    <Container>
      <Row>
        <Col md={6}>Движение:</Col>
        <Col><Badge bg={bg} text={text}>{movement}</Badge></Col>
      </Row>
    </Container>
  );
}

export default Movement;
