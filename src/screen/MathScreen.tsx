import React from 'react';
import { myStyle } from '../MyStyle';
import { useAppTheme } from '../../App';
import { StatusBar, View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PopBackButton from '../component/PopBackButton';
import MathQuesiton from '../component/MathQuesiton';

export default function MathScreen() {
  const theme = useAppTheme();
  return (
    <>
      <StatusBar backgroundColor={theme.colors.rosePink} />
      <SafeAreaView style={myStyle.background}>
        <View>
          <PopBackButton />
        </View>

        <View>
          <MathQuesiton />
        </View>
      </SafeAreaView>
    </>
  );
}
