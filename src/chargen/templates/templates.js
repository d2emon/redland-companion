import { choice } from '../utils';
import { dice } from '../stats';

function template(title, agility, smarts, spirit, strength, vigor) {
    return {
        title,
        agility,
        smarts,
        spirit,
        strength,
        vigor,
    }
}

const data = [
  template('Авантюрист',
    dice.d6, dice.d8, dice.d4, dice.d6, dice.d6),
  template('Атаман',
    dice.d8, dice.d4, dice.d6, dice.d6, dice.d6),
  template('Боец',
    dice.d8, dice.d4, dice.d4, dice.d8, dice.d8),
  template('Воитель',
    dice.d8, dice.d6, dice.d6, dice.d6, dice.d6),
  template('Дипломат',
    dice.d4, dice.d8, dice.d8, dice.d4, dice.d6),
  template('Идеалист',
    dice.d4, dice.d6, dice.d8, dice.d6, dice.d6),
  template('Исследователь',
    dice.d6, dice.d8, dice.d8, dice.d4, dice.d4),
  template('Лидер',
    dice.d4, dice.d8, dice.d4, dice.d8, dice.d6),
  template('Мистик',
    dice.d4, dice.d10, dice.d6, dice.d4, dice.d6),
  template('Одиночка',
    dice.d8, dice.d6, dice.d4, dice.d6, dice.d6),
  template('Умелец',
    dice.d6, dice.d10, dice.d4, dice.d4, dice.d6),
  template('Хитрец',
    dice.d6, dice.d8, dice.d8, dice.d4, dice.d4),
]

const generateTemplate = () => choice(data);

export default generateTemplate;
