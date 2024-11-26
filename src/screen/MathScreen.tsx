import React from 'react';
import { myStyle } from '../MyStyle';
import { useAppTheme } from '../../App';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
