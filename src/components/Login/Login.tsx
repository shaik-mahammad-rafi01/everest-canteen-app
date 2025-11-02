import React, { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { LoginStyles } from './LoginStyles';
import { admin } from '../../data/Admin';
import { User } from '../../types/menu';

const Login = ({ route, navigation }: any) => {
  const { role } = route.params;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Please fill username and password');
      return;
    }
    if (role === 'Admin') {
      if (username === admin.UserName && password === admin.Password) {
        Alert.alert('Success', `Logged in as ${role}`);
        navigation.navigate('Menu', { role: 'Admin' });
      } else {
        Alert.alert("Failed" , 'Invalid Admin');
        return;
      }
    } else {
      const responce = await fetch('http://localhost:3000/users');
      const allUsers = await responce.json();

      const existUser = allUsers.find(
        (user: User) =>
          user.userName === username && user.password === password,
      );

      if (existUser) {
        Alert.alert('Success', `Welcome ${username}`);
        navigation.navigate('User-Menu', { role: 'User' });
      } else {
        Alert.alert('Invalid credentials');
      }
    }
  };

  return (
    <View style={LoginStyles.container}>
      <View style={LoginStyles.headerContainer}>
        <Text style={LoginStyles.headerText}>
          Sign in as {role ? role : 'Guest'}
        </Text>
      </View>

      <View style={LoginStyles.formContainer}>
        <Text style={LoginStyles.label}>Username</Text>
        <TextInput
          style={LoginStyles.input}
          placeholder="Enter your name"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={LoginStyles.label}>Password</Text>
        <TextInput
          style={LoginStyles.input}
          placeholder="Enter your password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable style={LoginStyles.signInButton} onPress={handleLogin}>
          <Text style={LoginStyles.signInText}>SIGN IN</Text>
        </Pressable>
      </View>

      {role !== 'Admin' && (
        <View style={LoginStyles.footerContainer}>
          <Text style={LoginStyles.orText}>or sign in with</Text>
          <Text style={LoginStyles.footerText}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate('Register', { role })}>
            <Text style={LoginStyles.signUpText}>SIGN UP</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Login;
