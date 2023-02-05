import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.ceil(Math.random() * 100);

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const brainGcd = () => {
  const userName = greeting();
  let looseMarker = 0;

  for (let i = 0; i < 3; i += 1) {
    const numbers = [getRandomNumber(), getRandomNumber()];
    const firstNumber = Math.max(numbers[0], numbers[1]);
    const secondNumber = Math.min(numbers[0], numbers[1]);
    console.log('Find the greatest common divisor of given numbers.');
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const userAnswer = readlineSync.question('Your answer:  ');
    let marker = 0;
    let devider = secondNumber;
    let correctAnswer = 0;
    while (marker === 0) {
      if ((firstNumber % devider === 0) && (secondNumber % devider === 0)) {
        correctAnswer = devider;
        marker = 1;
        break;
      } else {
        devider -= 1;
      }
    }
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

export default brainGcd;
