import React from 'react';
import { Image, Pressable, ScrollView, StatusBar, View } from 'react-native';
import { useAppTheme } from '../../App';
import { myStyle } from '../MyStyle';
import AppTitle from '../component/AppTitle';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  const theme = useAppTheme();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <>
      <StatusBar backgroundColor={theme.colors.rosePink} />
      <SafeAreaView style={myStyle.background}>
        <ScrollView>
          <View style={{ marginTop: 30 }}>
            <AppTitle />
          </View>
          <View
            style={{
              width: 'auto',
              flexDirection: 'column',
              justifyContent: 'center',
              marginTop: 30,
            }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Pressable
                style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                onPress={() => {
                  navigation.navigate('alphabetVideos');
                }}
                disabled
              >
                <Image
                  source={require('../assets/icons/read.png')}
                  style={{ width: 200, height: 200 }}
                />
              </Pressable>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Pressable
                style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                onPress={() => {
                  navigation.navigate('writing');
                }}
              >
                <Image
                  source={require('../assets/icons/writing.png')}
                  style={{ width: 200, height: 200 }}
                />
              </Pressable>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Pressable
                style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                onPress={() => {
                  navigation.navigate('math');
                }}
              >
                <Image
                  source={require('../assets/icons/math.png')}
                  style={{ width: 200, height: 200 }}
                />
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
