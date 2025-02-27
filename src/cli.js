import readlineSync from 'readline-sync';

export const imya = () => {
  console.log('Welcome to the Brain Games!');
  const urname = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${urname}!`);
  return urname;
};