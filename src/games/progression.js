import { getRandomNumber } from '../utils.js'
import runGame from '../index.js'

const description = 'What number is missing in the progression?'

const generateRound = () => {
  const length = getRandomNumber(5, 10)
  const start = getRandomNumber(1, 20)
  const diff = getRandomNumber(1, 5)
  const hiddenIndex = getRandomNumber(0, length - 1)

  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * diff)
  }

  const correctAnswer = progression[hiddenIndex].toString()
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')
  return { question, correctAnswer }
}

export default () => runGame(description, generateRound)
