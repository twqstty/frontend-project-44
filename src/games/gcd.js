import readlineSync from 'readline-sync';

const gcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
  const findGcd = (a, b) => (b === 0 ? a : findGcd(b, a % b));

  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const question = `${num1} ${num2}`;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = findGcd(num1, num2);

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default gcd;