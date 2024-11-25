import React from 'react';
import { IconButton } from 'react-native-paper';
import { useAppTheme } from '../../App';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function PopBackButton() {
  const theme = useAppTheme();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <>
      <IconButton
        icon={'keyboard-backspace'}
        iconColor={theme.colors.rosePink}
        onPress={() => navigation.pop()}
        size={50}
      />
    </>
  );
}
