import { StyleSheet } from 'react-native';
import { theme } from './MyTheme';

export const myStyle = StyleSheet.create({
  background: {
    backgroundColor: theme.colors.lightPink,
    flex: 1,
  },

  primaryButton: {
    backgroundColor: theme.colors.rosePink,
  },
});
