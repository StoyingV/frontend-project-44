import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  return userName;
};

const primeChek = (number) => {
  let primeMarker = 0;
  for (let i = 2; i < (number); i += 1) {
    if (number % i === 0) {
      primeMarker = 1;
      return primeMarker;
    }
  }
  return primeMarker;
};

const brainPrime = () => {
  const userName = greeting();
  let looseMarker = 0;
  for (let j = 0; j < 3; j += 1) {
    const questionNumber = Math.ceil(Math.random() * 100);
    const primeMarker = primeChek(questionNumber);

    let correctAnswer = '';
    if (primeMarker === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    console.log(`Question: ${questionNumber}`);
    const userAnswer = readlineSync.question('Your answer:  ');
    if (userAnswer === 'yes' && primeMarker === 0) {
      console.log('Correct!');
    } else if (userAnswer === 'no' && primeMarker === 1) {
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

export default brainPrime;
