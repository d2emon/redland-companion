import React from 'react';
import { Badge, Container } from 'react-bootstrap';
import * as BACKGROUND from './data/backgrounds';

const backgroundNames = {
    [BACKGROUND.GILOMORPHETICS]: '♦ Гиломорфетика',
    [BACKGROUND.FLUCTUATICS]: '♦ Флуктуатика',
    [BACKGROUND.NECROBIOTICS]: '♦ Некробиотика',
    [BACKGROUND.HERMETICS]: '♥ Герменевтика',
    [BACKGROUND.THEURGY]: '♥ Теургия',
    [BACKGROUND.SPIRITUALISM]: '♥ Спиритуализм',
    [BACKGROUND.QUACKERY]: '♣ Знахарство',
    [BACKGROUND.WITCHCRAFT]: '♣ Ведовство',
    [BACKGROUND.SHAMANISM]: '♣ Шаманизм',
    [BACKGROUND.ACTIONISM]: '♠ Акционизм',
    [BACKGROUND.LUCK]: '♠ Фарт',
    [BACKGROUND.DEMONOLOGY]: '♠ Демонология',
};

function ArcaneBadge(props) {
    const {
        backgrounds,
    } = props;

    console.log(props);

    if (!backgrounds) {
        return null;
    }

    return <Container>
        { backgrounds.map((background, id) => <Badge
            key={id}
        >
            {backgroundNames[background]}
        </Badge>) }
    </Container>;
}

export default ArcaneBadge;
