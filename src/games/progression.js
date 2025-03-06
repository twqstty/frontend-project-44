import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 20);
  const diff = getRandomNumber(1, 5);
  const hiddenIndex = getRandomNumber(0, length - 1);
  
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * diff);
  }
  
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  
  return { progression, correctAnswer };
};

const playProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const { progression, correctAnswer } = generateProgression();
    const question = `Question: ${progression.join(' ')}`;
    console.log(question);
    
    const userAnswer = readlineSync.question('Your answer: ');
    const numAnswer = Number(userAnswer);
    
    if (numAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  
  console.log(`Congratulations, ${name}!`);
};

export default playProgressionGame;