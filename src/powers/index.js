import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PowerCard from './PowerCard';
import loadPowers from './data';

function PowerList (props) {
    const {
        size=4,
    } = props

    const [powers, setPowers] = useState([]);

    const fetchPowers = async () => {
        const data = await loadPowers();

        console.log(data);
        setPowers(data);
    };

    useEffect(() => {
        fetchPowers();
    }, []);

    return <Container>
        <Row>
            { powers.map((power) => <Col
                key={power.powerId}
                md={size}
                className={'my-2'}
            >
                <PowerCard
                    {...power}
                />
            </Col>) }

        </Row>
    </Container>;

}

export default PowerList;