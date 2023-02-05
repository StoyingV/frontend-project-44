import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let looseMarker = 0;
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100 + 1);
    console.log(`Question: ${number} `);
    const userAnswer = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (userAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
        looseMarker += 1;
        break;
      }
    } else if (number % 2 === 1) {
      if (userAnswer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
        looseMarker += 1;
        break;
      }
    }
  }
  if (looseMarker === 0) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default brainEven;
