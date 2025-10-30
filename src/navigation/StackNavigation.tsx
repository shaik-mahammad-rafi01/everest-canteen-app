import { NavigationContainer } from '@react-navigation/native';

import WelcomePage from '../components/WelcomePage/WelcomePage';
import Login from '../components/Login/Login';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../components/Register/Register';

const StackNavigaton = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="home" component={WelcomePage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigaton;
