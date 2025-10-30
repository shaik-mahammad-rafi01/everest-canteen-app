import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { LoginStyles } from './LoginStyles';

const Login = ({route , navigation}:any) => {
    const { role } = route.params;
  return (
    <View style={LoginStyles.container}>
      <View style={LoginStyles.headerContainer}>
        <Text style={LoginStyles.headerText}>Sign in as {role ? role : 'Guest'}</Text>
      </View>

      <View style={LoginStyles.formContainer}>
        <Text style={LoginStyles.label}>Username</Text>
        <TextInput
          style={LoginStyles.input}
          placeholder="Enter your name"
          placeholderTextColor="#aaa"
        />

        <Text style={LoginStyles.label}>Password</Text>
        <TextInput
          style={LoginStyles.input}
          placeholder="Enter your password"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        <Pressable style={LoginStyles.signInButton}>
          <Text style={LoginStyles.signInText}>SIGN IN</Text>
        </Pressable>

        <Text style={LoginStyles.orText}>or sign in with</Text>
      </View>

      <View style={LoginStyles.footerContainer}>
        <Text style={LoginStyles.footerText} >Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={LoginStyles.signUpText}>SIGN UP</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
