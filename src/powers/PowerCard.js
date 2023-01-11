import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ArcaneBadge from './ArcaneBadge';
import PowerDuration from './PowerDuration';
import PowerRange from './PowerRange';
import RankBadge from './RankBadge';

function PowerCard(props) {
    const {
        backgrounds,
        description,
        duration,
        examples,
        points,
        range,
        rank,
        title,
    } = props;

    return <Card>
        <Card.Header>
            <Row>
                <Col>
                    <Card.Title>
                        {title}
                    </Card.Title>
                </Col>
                <Col md={4}>
                    <RankBadge rank={rank} />
                </Col>
            </Row>
        </Card.Header>
        <Card.Body>
            <Row>
                <Col>
                    { backgrounds && <ArcaneBadge backgrounds={backgrounds} /> }
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Header>
                            Пункты Силы
                        </Card.Header>
                        <Card.Body>
                            { points }
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <PowerRange range={range} />
                </Col>
                <Col md={4}>
                    <PowerDuration duration={duration} />
                </Col>
            </Row>

            {description}
        </Card.Body>

        {examples && <Card.Footer>
            <Card>
                <Card.Header>
                    Проявления
                </Card.Header>
                <Card.Body>
                    {examples}
                </Card.Body>
            </Card>
        </Card.Footer> }
    </Card>;
}

export default PowerCard;