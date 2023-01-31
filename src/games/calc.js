import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100);
const operator = ['+', '-', '*'];

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  let looseMarker = 0;
  for (let i = 0; i < 3; i += 1) {
    const operatorNumber = Math.round(Math.random() * 2);
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    console.log('What is the result of the expression?');
    console.log(`Question: ${firstNumber} ${operator[operatorNumber]} ${secondNumber}`);
    const userAnswer = readlineSync.question('Your answer:  ');
    let correctResult = 0;

    switch (operatorNumber) {
      case 0:
        correctResult = firstNumber + secondNumber;
        break;
      case 1:
        correctResult = firstNumber - secondNumber;
        break;
      case 2:
        correctResult = firstNumber * secondNumber;
        break;
      default:
    }

    if (userAnswer === String(correctResult)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctResult}'`);
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

export default brainCalc;