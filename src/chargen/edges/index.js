import React from 'react';
import { Badge, Container } from 'react-bootstrap';

function Edges(props) {
  const {
    edges,
  } = props;

  return (
    <Container>
      { edges.map(
        (edge) => edge
          ? <span key={edge.title}>
            <Badge>
              { edge.title }
            </Badge>
            &nbsp;
          </span>
          : null
      ) }            
    </Container>
  );
}

export default Edges;
