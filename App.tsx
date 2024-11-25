import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { PaperProvider, useTheme } from 'react-native-paper';
import { theme } from './src/MyTheme';
import Home from './src/screen/Home';

const Stack = createNativeStackNavigator();
export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();
function App(): React.JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
