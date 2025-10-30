import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { WelcomeStyles } from './WelcomePageStyles';

const WelcomePage = ({navigation}:any) => {
  return (
    <View style={WelcomeStyles.mainContainer}>
      <View style={WelcomeStyles.titleContainer}>
        <Text style={WelcomeStyles.welcomeHeader}>A CANTEEN JUST FOR YOU</Text>
      </View>

      <View style={WelcomeStyles.buttonsContainer}>
        <Pressable style={WelcomeStyles.button} onPress={()=>navigation.navigate('Login',{role : 'User'})}>
          <Text style={WelcomeStyles.buttonText}>LOGIN AS USER</Text>
        </Pressable >
        <Pressable style={WelcomeStyles.button} onPress={()=>navigation.navigate('Login',{role : 'Admin'})}>
          <Text style={WelcomeStyles.buttonText} >LOGIN AS ADMIN</Text>
        </Pressable>
      </View>

      <View style={WelcomeStyles.footerContainer}>
        <Text style={WelcomeStyles.footerText}>Welcome to Everest Canteen</Text>
      </View>
    </View>
  );
};

export default WelcomePage;
