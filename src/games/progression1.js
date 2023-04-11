import runEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const generateRound = () => {
  const startNumber = Math.ceil(Math.random() * 10);
  const progressionStep = Math.ceil(Math.random() * 10);
  const arrayItemsNumber = 5 + Math.ceil(Math.random() * 5);
  const questionItemNumber =
    2 + Math.floor(Math.random() * (arrayItemsNumber - 2));
  const array = [];
  for (let i = 0; i < arrayItemsNumber; i += 1) {
    array.push(startNumber + i * progressionStep);
  }
  const answer = array[questionItemNumber - 1];

  array[questionItemNumber - 1] = '..';
  const question = array.join(' ');
  return [question, String(answer)];
};

const runProgression = () => runEngine(rules, generateRound);

export default runProgression;

runProgression();
