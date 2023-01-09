import React from 'react';
import { Badge, Container } from 'react-bootstrap';
import * as RANKS from './data/ranks';

function RankBadge(props) {
    const {
        rank,
    } = props;

    return <Container>
        { (rank === RANKS.NOVICE) && <Badge>Новичок</Badge> }
        { (rank === RANKS.SEASONED) && <Badge>Закаленный</Badge> }
        { (rank === RANKS.VETERAN) && <Badge>Ветеран</Badge> }
        { (rank === RANKS.HERO) && <Badge>Герой</Badge> }                
        { (rank === RANKS.LEGEND) && <Badge>Легенда</Badge> }                
    </Container>;
}

export default RankBadge;
