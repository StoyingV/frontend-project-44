import readlineSync from 'readline-sync';
import welcome from './cli.js';

export const roundsNumber = 3;

const runEngine = (rules, generateRound) => {
  const userName = welcome();
  console.log(rules);
  for (let i = 0; i < roundsNumber; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer:  ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEngine;
