import React, { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { RegisterStyles } from './RegisterStyles';

const Register = ({route, navigation}:any) => {
    const { role } = route.params || {};
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleSignUp = ()=>{
    if (!username || !password || !confirmPassword) {
      Alert.alert("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match");
      return;
    }
    Alert.alert('Success', `Account created for ${role || 'Guest'}!`);
    navigation.navigate('Login', { role });
    }
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
              value={username}
              onChangeText={setUsername}
            />
    
            <Text style={RegisterStyles.label}>Password</Text>
            <TextInput
              style={RegisterStyles.input}
              placeholder="Enter your password"
              placeholderTextColor="#aaa"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Text style={RegisterStyles.label}>Confirm password</Text>
            <TextInput
              style={RegisterStyles.input}
              placeholder="Confirm your password"
              placeholderTextColor="#aaa"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
    
            <Pressable style={RegisterStyles.signInButton} onPress={handleSignUp}>
              <Text style={RegisterStyles.signInText}>SIGN UP</Text>
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
