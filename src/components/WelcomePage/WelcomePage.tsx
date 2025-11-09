import React from 'react';
import { Text, View } from 'react-native';
import { WelcomeStyles } from './WelcomePageStyles';
import Button from '../Button/Button';

const WelcomePage = ({navigation} : any) => {
  return (
    <View style={WelcomeStyles.mainContainer}>
      <View style={WelcomeStyles.titleContainer}>
        <Text style={WelcomeStyles.welcomeHeader}>A CANTEEN JUST FOR YOU</Text>
      </View>

      <View style={WelcomeStyles.buttonsContainer}>
        <Button title='LOGIN AS USER' onPress = {()=>navigation.navigate('Login' , {role : 'User'})}/>
        <Button title='LOGIN AS ADMIN'onPress = {()=> navigation.navigate('Login' , {role : 'Admin'})}/> 
      </View>

      <View style={WelcomeStyles.footerContainer}>
        <Text style={WelcomeStyles.footerText}>Welcome to Everest Canteen</Text>
      </View>
    </View>
  );
};

export default WelcomePage;
