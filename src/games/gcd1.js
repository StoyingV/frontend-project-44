import runEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getRandomNumber = () => Math.ceil(Math.random() * 100);

const generateRound = () => {
  const numbers = [getRandomNumber(), getRandomNumber()];
  const firstNumber = Math.max(numbers[0], numbers[1]);
  const secondNumber = Math.min(numbers[0], numbers[1]);
  const question = `${firstNumber} ${secondNumber}`;
  let marker = 0;
  let devider = secondNumber;
  let answer = 0;
  while (marker === 0) {
    if (firstNumber % devider === 0 && secondNumber % devider === 0) {
      answer = devider;
      marker = 1;
      break;
    } else {
      devider -= 1;
    }
  }
  return [question, String(answer)];
};

const runGcd = () => runEngine(rules, generateRound);

export default runGcd;
