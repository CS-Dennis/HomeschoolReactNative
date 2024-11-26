import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { Button, IconButton, Text } from 'react-native-paper';
import { MathQuestionType } from '../types/MathQuestionType';
import { theme } from '../MyTheme';
import PrimaryButton from './PrimaryButton';
import PlusQuestion from './PlusQuestion';
import MinusQuestion from './MinusQuestion';

export default function MathQuesiton() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [questionType, setQuestionType] = useState<MathQuestionType>(null);

  //   useEffect(() => {
  //     setQuestionType(null);
  //   }, []);

  return (
    <>
      <View style={{ flexDirection: 'column' }}>
        <Text style={{ textAlign: 'center', fontSize: 40 }}>
          Math Questions
        </Text>
      </View>

      {!questionType && (
        <>
          <View>
            <Text style={{ textAlign: 'center', fontSize: 30, marginTop: 20 }}>
              Please pick a question type:
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 20,
            }}
          >
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                justifyContent: 'center',
              })}
              onPress={() => setQuestionType('plus')}
            >
              <Image
                source={require('../assets/icons/plus.png')}
                style={{ width: 80, height: 80 }}
              />
            </Pressable>
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                justifyContent: 'center',
              })}
              onPress={() => setQuestionType('minus')}
            >
              <Image
                source={require('../assets/icons/minus.png')}
                style={{ width: 80, height: 10 }}
              />
            </Pressable>
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                justifyContent: 'center',
              })}
              onPress={() => {}}
              disabled
            >
              <Image
                source={require('../assets/icons/multiply.png')}
                style={{ width: 100, height: 100 }}
              />
            </Pressable>
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                justifyContent: 'center',
              })}
              onPress={() => {}}
              disabled
            >
              <Image
                source={require('../assets/icons/divide.png')}
                style={{ width: 80, height: 80 }}
              />
            </Pressable>
          </View>
        </>
      )}

      {questionType !== null && (
        <View style={{ alignSelf: 'center' }}>
          <PrimaryButton
            title="Choose Type Again"
            action={() => setQuestionType(null)}
          />
        </View>
      )}

      {/* when question type is selected */}
      {questionType === 'plus' && <PlusQuestion />}

      {questionType === 'minus' && <MinusQuestion />}
    </>
  );
}
