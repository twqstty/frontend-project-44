import { getRandomNumber } from '../utils.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => (b === 0 ? a : findGcd(b, a % b));

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = findGcd(num1, num2).toString();
  return { question, correctAnswer };
};

export default () => runGame(description, generateRound);