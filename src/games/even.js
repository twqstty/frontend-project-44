import readlineSync from 'readline-sync';

const even = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default even;