import { getRandomNumber } from '../utils.js'
import runGame from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const generateRound = () => {
  const number = getRandomNumber(1, 100)
  const question = number.toString()
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no'
  return { question, correctAnswer }
}

export default () => runGame(description, generateRound)
