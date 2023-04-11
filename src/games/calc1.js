import runEngine from '../index.js';

const rules = 'What is the result of the expression?';
const getRandomNumber = () => Math.floor(Math.random() * 100);
const operator = ['+', '-', '*'];

const generateRound = () => {
  const operatorNumber = Math.round(Math.random() * 2);
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `${firstNumber} ${operator[operatorNumber]} ${secondNumber}`;
  let answer = 0;
  switch (operatorNumber) {
    case 0:
      answer = firstNumber + secondNumber;
      break;
    case 1:
      answer = firstNumber - secondNumber;
      break;
    case 2:
      answer = firstNumber * secondNumber;
      break;
    default:
  }
  return [question, String(answer)];
};

const runCalc = () => runEngine(rules, generateRound);

export default runCalc;
