import { choice } from '../utils';

export const GENDER_MALE = 'М'
export const GENDER_FEMALE = 'Ж'

const genders = [
  GENDER_MALE,
  GENDER_FEMALE,
]

const generateGender = () => choice(genders);

export default generateGender;
