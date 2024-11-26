import { MathQuestionType } from './types/MathQuestionType';

export const generateMathQuestion = (
  questionType: MathQuestionType,
  numOfDigits: number,
  setFirstNumber: (num: number) => void,
  setSecondNumber: (num: number) => void,
  setResultNumber: (num: number) => void
) => {
  var firstNumber = Math.floor(Math.random() * Math.pow(10, numOfDigits));
  var secondNumber = Math.floor(Math.random() * Math.pow(10, numOfDigits));
  var resultNumber = 0;
  switch (questionType) {
    case null:
      console.log('Need a question type.');
      break;

    case 'plus':
      resultNumber = firstNumber + secondNumber;
      setFirstNumber(firstNumber);
      setSecondNumber(secondNumber);
      setResultNumber(resultNumber);
      break;

    case 'minus':
      resultNumber = firstNumber - secondNumber;
      setFirstNumber(firstNumber);
      setSecondNumber(secondNumber);
      setResultNumber(resultNumber);
      break;
    default:
      break;
  }
};
