import { choice } from '../utils';

const data = [
    'Авантюрист',
    'Атаман',
    'Боец',
    'Воитель',
    'Дипломат',
    'Идеалист',
    'Исследователь',
    'Лидер',
    'Мистик',
    'Одиночка',
    'Умелец',
    'Хитрец',
]

const generateTemplate = () => choice(data);

export default generateTemplate;
