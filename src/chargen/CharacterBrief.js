import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Gender from './genders';
import Movement from './movements';
import Name from './names';
import Origin from './origins';
import Stats from './stats';
import Template from './templates';

function CharacterBrief(props) {
  const {
    gender = 'M',
    name = 'Name',
    movement = 'Зелёное',
    template = 'Template',
    origin = {},
    stats = {},
    pace = 6,
    parry = 2,
    charisma = 0,
    tough = 2,
    onDelete = () => {},
  } = props;



  return (
    <Card>
      <Card.Header>
        <Row>
          <Col><Name name={name} /></Col>
          <Col md={4}>
            <Button onClick={onDelete}>Удалить</Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Container>
          <Gender gender={gender} />
          <Movement movement={movement} />
          <Template template={template} />
          <Origin origin={origin} />
          <Stats
            pace={pace}
            parry={parry}
            charisma={charisma}
            tough={tough}
            {...stats}
          />
        </Container>
      </Card.Body>
    </Card>
  );
}

export default CharacterBrief;
