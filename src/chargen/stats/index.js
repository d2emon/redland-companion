import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export const dice = {
    d4: 1,
    d6: 2,
    d8: 3,
    d10: 4,
    d12: 5,
}

const diceText = {
    0: null,
    [dice.d4]: 'd4',
    [dice.d6]: 'd6',
    [dice.d8]: 'd8',
    [dice.d10]: 'd10',
    [dice.d12]: 'd12',
}

function Stats(props) {
  const {
    agility,
    smarts,
    spirit,
    strength,
    vigor,
    pace,
    parry,
    charisma,
    tough,
  } = props;

  return (
    <Card className="my-2">
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col>Ловкость:</Col>
                        <Col>{ diceText[agility] || '-' }</Col>
                    </Row>
                    <Row>
                        <Col>Смекалка:</Col>
                        <Col>{ diceText[smarts] || '-' }</Col>
                    </Row>
                    <Row>
                        <Col>Характер:</Col>
                        <Col>{ diceText[spirit] || '-' }</Col>
                    </Row>
                    <Row>
                        <Col>Сила:</Col>
                        <Col>{ diceText[strength] || '-' }</Col>
                    </Row>
                    <Row>
                        <Col>Выносливость:</Col>
                        <Col>{ diceText[vigor] || '-' }</Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col>Шаг:</Col>
                        <Col>{ pace }</Col>
                    </Row>
                    <Row>
                        <Col>Защита:</Col>
                        <Col>{ parry }</Col>
                    </Row>
                    <Row>
                        <Col>Харизма:</Col>
                        <Col>{ charisma }</Col>
                    </Row>
                    <Row>
                        <Col>Стойкость:</Col>
                        <Col>{ tough }</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </Card>
  );
}

export default Stats;
