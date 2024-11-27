import React, { useState } from 'react';
import { Image, View } from 'react-native';
import PrimaryButton from './PrimaryButton';
import { Text, TextInput } from 'react-native-paper';
import { MathQuestionType } from '../types/MathQuestionType';
import { theme } from '../MyTheme';
import { generateMathQuestion } from '../util';

export default function PlusQuestion() {
  const [firstNumber, setFirstNumber] = useState(
    Math.floor(Math.random() * 100)
  );
  const [secondNumber, setSecondNumber] = useState(
    Math.floor(Math.random() * 100)
  );
  const [resultNumber, setResultNumber] = useState(firstNumber + secondNumber);
  const [userInput, setUserInput] = useState('');

  const [resetQuestionFlag, setResetQuestionFlag] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  const submitAnswer = () => {
    if (userInput.trim() === '') {
      return;
    }

    setResetQuestionFlag(true);
    if (resultNumber === parseInt(userInput)) {
      console.log('correct');
      setIsAnswerCorrect(true);
    } else {
      console.log('incorrect');
      setIsAnswerCorrect(false);
    }
  };

  const resetQuestion = () => {
    setResetQuestionFlag(false);
    setUserInput('');
    setIsAnswerCorrect(null);

    generateMathQuestion(
      'plus',
      2,
      setFirstNumber,
      setSecondNumber,
      setResultNumber
    );
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: 50,
        }}
      >
        <Text style={{ fontSize: 60 }}>{firstNumber}</Text>
        <Text style={{ fontSize: 60, paddingHorizontal: 10 }}>+</Text>
        <Text style={{ fontSize: 60 }}>{secondNumber}</Text>
        <Text style={{ fontSize: 60 }}>=</Text>
        <TextInput
          style={{ fontSize: 60, width: 250 }}
          defaultValue=""
          value={userInput}
          keyboardType="number-pad"
          placeholder="Result"
          multiline={false}
          numberOfLines={1}
          underlineColor={theme.colors.rosePink}
          activeUnderlineColor={theme.colors.rosePink}
          textColor={theme.colors.rosePink}
          onChangeText={(text) => setUserInput(text)}
        />
        <View style={{ justifyContent: 'center', marginLeft: 40 }}>
          {!resetQuestionFlag ? (
            <PrimaryButton title="Submit" action={submitAnswer} />
          ) : (
            <PrimaryButton title="Next Question" action={resetQuestion} />
          )}
        </View>
      </View>

      <View
        style={{
          alignItems: 'center',
        }}
      >
        {isAnswerCorrect && (
          <Image
            source={require('../assets/icons/thumbsup.png')}
            style={{ width: 200, height: 200 }}
          />
        )}

        {isAnswerCorrect === false && (
          <Image
            source={require('../assets/icons/thumbsdown.png')}
            style={{ width: 200, height: 200 }}
          />
        )}
      </View>
    </View>
  );
}
