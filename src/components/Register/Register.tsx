import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { RegisterStyles } from './RegisterStyles';

const Register = ({route, navigation}:any) => {
    const { role } = route.params || {};
  return (
        <View style={RegisterStyles.container}>
          <View style={RegisterStyles.headerContainer}>
            <Text style={RegisterStyles.headerText}>Sign Up as {role ? role : 'Guest'}</Text>
          </View>
    
          <View style={RegisterStyles.formContainer}>
            <Text style={RegisterStyles.label}>Username</Text>
            <TextInput
              style={RegisterStyles.input}
              placeholder="Enter your name"
              placeholderTextColor="#aaa"
            />
    
            <Text style={RegisterStyles.label}>Password</Text>
            <TextInput
              style={RegisterStyles.input}
              placeholder="Enter your password"
              placeholderTextColor="#aaa"
              secureTextEntry
            />
            <Text style={RegisterStyles.label}>Confirm password</Text>
            <TextInput
              style={RegisterStyles.input}
              placeholder="Confirm your password"
              placeholderTextColor="#aaa"
              secureTextEntry
            />
    
            <Pressable style={RegisterStyles.signInButton}>
              <Text style={RegisterStyles.signInText}>SIGN IN</Text>
            </Pressable>
    
            <Text style={RegisterStyles.orText}>or sign in with</Text>
          </View>
    
          <View style={RegisterStyles.footerContainer}>
            <Text style={RegisterStyles.footerText} >Don't have an account?</Text>
            <Pressable onPress={() => navigation.navigate('Login', { role })}>
              <Text style={RegisterStyles.signUpText}>SIGN IN</Text>
            </Pressable>
          </View>
        </View>
  );
}

export default Register;
