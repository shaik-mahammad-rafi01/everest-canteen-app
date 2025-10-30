import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { WelcomeStyles } from './WelcomePageStyles';

const WelcomePage = () => {
  return (
    <View style={WelcomeStyles.mainContainer}>
      <View style={WelcomeStyles.titleContainer}>
        <Text style={WelcomeStyles.welcomeHeader}>A CANTEEN JUST FOR YOU</Text>
      </View>

      <View style={WelcomeStyles.buttonsContainer}>
        <Pressable style={WelcomeStyles.button}>
          <Text style={WelcomeStyles.buttonText}>LOGIN AS USER</Text>
        </Pressable>
        <Pressable style={WelcomeStyles.button}>
          <Text style={WelcomeStyles.buttonText}>LOGIN AS ADMIN</Text>
        </Pressable>
      </View>

      <View style={WelcomeStyles.footerContainer}>
        <Text>Welcome to Everest Canteen</Text>
      </View>
    </View>
  );
};

export default WelcomePage;
