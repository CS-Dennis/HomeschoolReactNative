import React from 'react';
import { Image, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { useAppTheme } from '../../App';
import { myStyle } from '../MyStyle';

export default function Home() {
  const theme = useAppTheme();
  return (
    <>
      <StatusBar backgroundColor={theme.colors.rosePink} />
      <SafeAreaView style={myStyle.background}>
        <View style={{}}>
          <Text>We Learn</Text>
          <Image
            source={require('../assets/icons/alphabet.png')}
            style={{ width: 100, height: 100 }}
          />
          <Button
            mode="contained"
            style={myStyle.primaryButton}
            onPress={() => {}}
          >
            <Text>Click Me</Text>
          </Button>
        </View>
      </SafeAreaView>
    </>
  );
}
