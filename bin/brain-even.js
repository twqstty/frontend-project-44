#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { imya } from '../src/cli.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const isEven = (number) => number % 2 === 0;

const brainEvenGame = () => {
  const name = imya(); 
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const question = getRandomNumber();
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer !== 'yes' && userAnswer !== 'no') { 
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    if (userAnswer !== correctAnswer) { 
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

brainEvenGame();
