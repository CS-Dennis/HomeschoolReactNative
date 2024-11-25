import React, { useState } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { useAppTheme } from '../../App';
import { Text } from 'react-native-paper';
import { alphabetVideoList } from '../constant';
import { myStyle } from '../MyStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import PopBackButton from '../component/PopBackButton';
// import WebView from 'react-native-webview';

export default function AlphabetVideos() {
  const theme = useAppTheme();

  const [alphabets, setAlphabets] = useState<string[]>(
    Object.keys(alphabetVideoList)
  );

  return (
    <>
      <StatusBar backgroundColor={theme.colors.rosePink} />
      <SafeAreaView style={myStyle.background}>
        <View>
          <PopBackButton />
        </View>
        <ScrollView>
          {/* <WebView
            source={{uri: ''}}
            style={{ marginTop: 20, width: '100%', height: 200 }}
          /> */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {alphabets.map((letter, i) => (
              <View
                key={letter}
                style={{
                  width: '33%',
                  alignSelf: 'center',
                }}
              >
                <Text
                  style={{ textAlign: 'center', fontSize: 50 }}
                >{`${letter.toUpperCase()} ${letter}`}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
