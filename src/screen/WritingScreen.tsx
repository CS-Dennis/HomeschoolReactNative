import React from 'react';
import { StatusBar, View } from 'react-native';
import { Text } from 'react-native-paper';
import { theme } from '../MyTheme';
import { myStyle } from '../MyStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import PopBackButton from '../component/PopBackButton';

export default function WritingScreen() {
  return (
    <>
      <StatusBar backgroundColor={theme.colors.rosePink} />
      <SafeAreaView style={myStyle.background}>
        <View>
          <PopBackButton />
        </View>

        <View>
          <View>
            <Text style={{ textAlign: 'center', fontSize: 50 }}>A</Text>
          </View>

          <View style={{ flex: 1 }}></View>
        </View>
      </SafeAreaView>
    </>
  );
}
