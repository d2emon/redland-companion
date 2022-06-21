import { choice } from '../utils';

const data = [
  'Буржуазия',
  'Дворянство',
  'Деклассированные',
  'Духовенство',
  'Инородцы',
  'Интеллигенция',
  'Казачество',
  'Крестьянство',
  'Кулачество',
  'Мещанство',
  'Пролетариат',
  'Чужестранцы',
]

const generateOrigin = () => choice(data);

export default generateOrigin;
