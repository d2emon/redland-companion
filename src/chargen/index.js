import React, { useCallback, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import CharacterBrief from './CharacterBrief';
import generateGender from './genders/genders';
import generateMovement from './movements/movements';
import generateName from './names/names';
import generateOrigin from './origins/origins';
import generateTemplate from './templates/templates';

/*
def generate():
    movement = generate_movement()
    template = generate_template()
    origin = generate_origin()

    print(f"Происхождение:  {origin}")
    print(f"Образ:          {template}")
    print(f"Движение:       {movement}")

*/

function CharGen() {
  const [ characters, setCharacters ] = useState([]);

  const removeCharacterById = useCallback((id) => {
    // setCharacters(characters.filter((character, characterId) => (characterId !== index)))
    console.log(id, characters);
    characters.forEach((character, characterId) => {
      console.log(characterId, id, characterId === id);
    });
    /*
    setCharacters(characters.filter((character, characterId) => {
      console.log(characterId, index, characterId === index);
      return true;
    }));
    */
  }, [characters]);

  const addCharacter = useCallback(() => {
    const index = characters.length;
    const gender = generateGender();
    const name = generateName(gender);
    const movement = generateMovement();
    const origin = generateOrigin();
    const template = generateTemplate();
    setCharacters([
      ...characters,
      <CharacterBrief
        name={name}
        gender={gender}
        origin={origin}
        template={template}
        movement={movement}
        onDelete={() => removeCharacterById(index)}
      />,
    ])

  }, [characters, removeCharacterById]);

  const size = 4;

  return <Container>
    <Row>
      { characters.map((character, index) => <Col
        key={index}
        md={size}
        className="my-2"
      >
        { character }
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
