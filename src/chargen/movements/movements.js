import { choice } from '../utils';

const data = [
  'Красное',
  'Белое',
  'Зелёное',
  'Чёрное',
]

const generateMovement = () => choice(data);

export default generateMovement;
