import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import CharacterBrief from './CharacterBrief';
import generateGender from './genders/genders';
import generateMovement from './movements/movements';
import generateName from './names/names';
import generateOrigin from './origins/origins';
import generateTemplate from './templates/templates';
import { dice } from './stats';

function CharGen() {
  const size = 4;

  const [ characters, setCharacters ] = useState([]);

  const removeCharacter = (index) => () => {
    setCharacters((prevCharacters) => {
      return prevCharacters.filter((character) => (character.characterId !== index));
    });
  };

  const addCharacter = () => {
    const gender = generateGender();
    const name = generateName(gender);
    const movement = generateMovement();
    const origin = generateOrigin();
    const template = generateTemplate();
    const stats = {
      agility: template.agility,
      smarts: template.smarts,
      spirit: template.spirit,
      strength: template.strength,
      vigor: template.vigor,
    };
    let charisma = 0;

    if (origin && origin.edges) {
      origin.edges.forEach((edge) => {
        Object.keys(stats).forEach((key) => {
          stats[key] += edge[key] - dice.d4;
        });
        charisma += edge.charisma;
      });
    }

    const vigorDice = stats.vigor * 2 + 2;
    console.log(vigorDice);
    const tough = 2 + Math.floor(vigorDice / 2)

    setCharacters(prevCharacters => [
      ...prevCharacters,
      {
        characterId: prevCharacters.length,
        gender,
        name,
        movement,
        origin,
        template,
        stats,
        pace: 6,
        parry: 2,
        charisma,
        tough,
        onDelete: removeCharacter(prevCharacters.length),
      },
    ])
  };

  return <Container>
    <Row>
      { characters.map((character) => <Col
        key={character.characterId}
        md={size}
        className="my-2"
      >
        <CharacterBrief
          { ...character }
        />
      </Col>) }
      <Col md={size} className="my-2">
        <Card>
          <Button
            variant="primary"
            onClick={addCharacter}
          >
              Добавить
          </Button>
        </Card>
      </Col>
    </Row>
  </Container>;
}

export default CharGen;
