import React from 'react';
import { Button } from 'react-native-paper';
import { theme } from '../MyTheme';

export default function PrimaryButton({
  title,
  action,
}: {
  title: string;
  action: () => void;
}) {
  return (
    <Button
      buttonColor={theme.colors.rosePink}
      textColor="white"
      style={{ paddingHorizontal: 20 }}
      onPress={action}
    >
      {title}
    </Button>
  );
}
