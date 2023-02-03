import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  return userName;
};
const brainProgression = () => {
  const userName = greeting();
  let looseMarker = 0;
  for (let j = 0; j < 3; j += 1) {
    const startNumber = Math.ceil(Math.random() * 10);
    const progressionStep = Math.ceil(Math.random() * 10);
    const arrayItemsNumber = 5 + Math.ceil(Math.random() * 5);
    const questionItemNumber = 2 + Math.floor(Math.random() * (arrayItemsNumber - 2));
    const array = [];
    for (let i = 0; i < arrayItemsNumber; i += 1) {
      array.push(startNumber + (i * progressionStep));
    }
    const correctAnswer = array[questionItemNumber - 1];
    array[questionItemNumber - 1] = '..';
    console.log('What number is missing in the progression?');
    console.log(`Question: ${array.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer:  ');
    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      looseMarker += 1;
      break;
    }
  }

  if (looseMarker === 0) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default brainProgression;
