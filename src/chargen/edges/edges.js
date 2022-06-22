import { dice } from '../stats';

function edge(title, data) {
  const {
    agility = dice.d4,
    smarts = dice.d4,
    spirit = dice.d4,
    strength = dice.d4,
    vigor = dice.d4,

    charisma = 0,

    skills = {
      classicEducation: 0,
      craft: 0,
      persuade: 0,
      repair: 0,
      streetwise: 0,
      stealth: 0,  
      survival: 0,
      textAnalyse: 0,      
      tracking: 0,
    },
    specialization = {},
  } = data;
  return {
    title,

    agility,
    smarts,
    spirit,
    strength,
    vigor,

    charisma,

    skills,
    specialization,

    data,
  }
}

export const EDGES = [
  edge('Аура опасности', {
    charisma: -2,
  }),
  edge('Благородство', {
    spirit: dice.d4,
  }),
  edge('Богатство', {
    // Богатство
  }),
  edge('Городской житель', {
    //
  }),
  edge('Дворянская честь', {
    //
  }),
  edge('Дитя природы', {
    skills: {
      survival: dice.d6,
      tracking: dice.d6,
    },
  }),
  edge('Дитя улиц', {
    skills: {
      streetwise: dice.d6,
      stealth: dice.d6,
    },
  }),
  edge('Духовное образование', {
    skills: {
      classicEducation: dice.d6,
    },
    specialization: {
      'Теология': 2,
    },
  }),
  edge('Жадность', {
    // Жадность
  }),
  edge('Казачья выучка', {}),
  edge('Каменное сердце', {
    charisma: -2,
  }),
  edge('Классовый враг', {
    //
  }),
  edge('Крепкое здоровье', {
    vigor: dice.d6,
    //
  }),
  edge('Не от мира сего', {
    //
  }),
  edge('Не убий!', {
    //
  }),
  edge('Неблагонадёжный', {
    //
  }),
  edge('Невежда', {
    // Невежда
  }),
  edge('Неграмотный', {
    // Неграмотность
  }),
  edge('Необразованный', {
    // Неграмотность (мелкий)
  }),
  edge('Образование', {
    // Образованный
  }),
  edge('Полезные связи', {
    // Полезные связи
  }),
  edge('Преследуемый', {
    //
  }),  
  edge('Привычка', {
    // Дурная привычка
  }),
  edge('Рабочие руки', {
    skills: {
      craft: dice.d6,
      repair: dice.d6,
    },
  }),
  edge('Ремесло', {}),
  edge('Тёртый калач', {
    skills: {
      persuade: dice.d6,
      streetwise: dice.d6,
    },
  }),
  edge('Чужак', {
    // Чужак
  }),
  edge('Энциклопедист', {
    skills: {
      textAnalyse: dice.d6,
    },
  }),
];

const findEdge = (title) => EDGES.find(edge => edge.title === title);

export default findEdge;
