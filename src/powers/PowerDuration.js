import React from 'react';
import { Card } from 'react-bootstrap';
import * as DURATION from './data/durations';
import * as STATS from './data/stats';

const durations = {
    [DURATION.INSTANT]: <span>мгновенно</span>,
    // [DISTANCE.TOUCH]: <span>касание</span>,
    // [DISTANCE.SELF]: <span>на себя</span>,
    // [DISTANCE.VIEW_FIELD]: <span>поле зрения</span>,
    [DURATION.SPECIAL]: <span>особая</span>,
    // [DISTANCE.CONE]: <span>конусный шаблон</span>,
    // [DISTANCE.AVERAGE]: <span>средний шаблон</span>,
}

const statNames = {
    [STATS.SMARTS]: <span>Смекалка</span>,
}

const unitNames = {
    [DURATION.MINUTES]: 'мин.',
    [DURATION.HOURS]: 'ч.',
}

const PowerDurationText = ({ duration }) => {
    if (!duration) {
        return null;
    }

    if (Object.keys(durations).indexOf(duration) >= 0) {
        return durations[duration];
    }

    if (duration.durationType === DURATION.COMPLEX) {
        return <>
            {duration.values.map((value, valueId) => {
                return <span key={valueId}>
                    <PowerDurationText duration={value} />
                    { (valueId < (duration.values.length - 1)) && ' или '}
                </span>;
            })}
        </>;
    }

    if (duration.durationType === DURATION.FROM_STAT) {
        const multiplierText = (duration.multiplier === 1)
            ? unitNames[duration.unit]
            : <>&times; {duration.multiplier} {unitNames[duration.unit]}</>;
        return <span>{statNames[duration.stat]} {multiplierText}</span>;
    }

    if (duration.durationType === DURATION.WITH_EXTRA) {
        const unitText = duration.unit
            ? unitNames[duration.unit]
            : '';
        const extraUnits = duration.units
            ? <>{duration.units}</>
            : '';

        const extraText = duration.extra
            ? <>({duration.extra} / {extraUnits} {unitText || 'раунд'})</>
            : '';
        return <span>{duration.value} {unitText} {extraText}</span>;
    }

    /*
    if (duration.distanceType === DISTANCE.WEAPON) {
        return <span>{duration.ranges.join('/')}</span>;
    }
    */

    /*
    if (duration.distanceType === DISTANCE.FIXED) {
        return <span>{duration.distance} клеток</span>;
    }
    */

    return null;
}

function PowerDuration({ duration }) {
    return <Card>
        <Card.Header>
            Длительность
        </Card.Header>
        <Card.Body>
            <PowerDurationText duration={duration} />
        </Card.Body>
    </Card>;
}

export default PowerDuration;
