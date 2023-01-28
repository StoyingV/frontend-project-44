import readlineSync from 'readline-sync';

const NameQuestion = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
};
export default NameQuestion;
