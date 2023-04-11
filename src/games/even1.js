import runEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = Math.floor(Math.random() * 100 + 1);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

const runEven = () => runEngine(rules, generateRound);

export default runEven;
