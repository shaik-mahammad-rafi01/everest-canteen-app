import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { ButtonStyles } from './ButtonStyles';

const Button = ({title}:{title : string}) => {
  return (
    <View>
        <Pressable style={ButtonStyles.button}>
           <Text style={ButtonStyles.buttonText}>{title}</Text>
        </Pressable>
    </View>
  );
}

export default Button;
