import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useAppTheme } from '../../App';
import { title } from '../constant';

export default function AppTitle() {
  const theme = useAppTheme();
  return (
    <View>
      <Text
        style={{
          fontSize: 50,
          fontWeight: 'bold',
          color: theme.colors.rosePink,
          textShadowColor: '#000',
          textShadowOffset: { width: 2, height: 2 },
          textShadowRadius: 4,
          textAlign: 'center',
        }}
      >
        {title}
      </Text>
    </View>
  );
}
