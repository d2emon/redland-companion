import React from 'react';
import { Card } from 'react-bootstrap';
import * as DISTANCE from './data/distances';
import * as STATS from './data/stats';

const distances = {
    [DISTANCE.TOUCH]: <span>касание</span>,
    [DISTANCE.SELF]: <span>на себя</span>,
    [DISTANCE.VIEW_FIELD]: <span>поле зрения</span>,
    [DISTANCE.SPECIAL]: <span>особая</span>,
    [DISTANCE.CONE]: <span>конусный шаблон</span>,
    [DISTANCE.AVERAGE]: <span>средний шаблон</span>,
}

const statNames = {
    [STATS.SMARTS]: <span>Смекалка</span>,
}

const unitNames = {
    [DISTANCE.METERS]: 'метров',
    [DISTANCE.KILOMETERS]: 'километров',
}

const PowerRangeText = ({ range }) => {
    if (!range) {
        return null;
    }

    if (Object.keys(distances).indexOf(range) >= 0) {
        return distances[range];
    }

    if (range.distanceType === DISTANCE.FROM_STAT) {
        const multiplierText = (range.multiplier === 1)
            ? unitNames[range.unit]
            : <>&times; {range.multiplier} {unitNames[range.unit]}</>;
        return <span>{statNames[range.stat]} {multiplierText}</span>;
    }

    if (range.distanceType === DISTANCE.WEAPON) {
        return <span>{range.ranges.join('/')}</span>;
    }

    if (range.distanceType === DISTANCE.FIXED) {
        return <span>{range.distance} клеток</span>;
    }

    return null;
}

function PowerRange({ range }) {
    return <Card>
        <Card.Header>
            Дистанция
        </Card.Header>
        <Card.Body>
            <PowerRangeText range={range} />
        </Card.Body>
    </Card>;
}

export default PowerRange;
