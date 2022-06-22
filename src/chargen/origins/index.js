import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Edges from '../edges';

function Origin(props) {
  const {
    origin,
  } = props;

  return (
    <Card className="my-2">
      <Card.Header>Происхождение: { origin.title }</Card.Header>
      <Card.Body>
        <Edges edges={origin.edges} />
      </Card.Body>
    </Card>
  );
}

export default Origin;
