import runEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeChek = (number) => {
  let primeMarker = 0;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      primeMarker = 1;
      return primeMarker;
    }
  }
  return primeMarker;
};

const generateRound = () => {
  const question = Math.ceil(Math.random() * 100);
  const primeMarker = primeChek(question);
  let answer = '';
  if (primeMarker === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [question, answer];
};

const runPrime = () => runEngine(rules, generateRound);

export default runPrime;

runPrime();
