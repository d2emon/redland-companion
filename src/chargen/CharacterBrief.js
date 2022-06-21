import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Gender from './genders';
import Movement from './movements';
import Name from './names';
import Origin from './origins';
import Template from './templates';

function CharacterBrief(props) {
  const {
    gender = 'M',
    name = 'Name',
    movement = 'Зелёное',
    template = 'Template',
    origin = 'Origin',
    onDelete = () => {},
  } = props;

  return (
    <Card>
      <Card.Header>
        <Row>
          <Col><Name name={name} /></Col>
          <Col md={4}>
            { /* <Button onClick={onDelete}>Удалить</Button> */ }
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Container>
          <Gender gender={gender} />
          <Movement movement={movement} />
          <Origin origin={origin} />
          <Template template={template} />
        </Container>
      </Card.Body>
    </Card>
  );
}

export default CharacterBrief;
