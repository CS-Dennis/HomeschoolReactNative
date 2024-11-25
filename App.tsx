import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { PaperProvider, useTheme } from 'react-native-paper';
import { theme } from './src/MyTheme';
import Home from './src/screen/Home';
import AlphabetVideos from './src/screen/AlphabetVideos';
import MathScreen from './src/screen/MathScreen';

const Stack = createNativeStackNavigator();
export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();
function App(): React.JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="alphabetVideos"
            component={AlphabetVideos}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="math"
            component={MathScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
