import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { ButtonStyles } from './ButtonStyles';

type ButtonProps = {
  title: string;
  onPress: () => void;
};
const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <View>
      <Pressable style={ButtonStyles.button} onPress={onPress}>
        <Text style={ButtonStyles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
