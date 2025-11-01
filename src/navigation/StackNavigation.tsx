import { NavigationContainer } from '@react-navigation/native';
import WelcomePage from '../components/WelcomePage/WelcomePage';
import Login from '../components/Login/Login';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../components/Register/Register';
import { TabNavigations } from './TabNavigation';
import { UserMenuTabNavigations } from './UserMenuTabNavigation';

const StackNavigaton = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={WelcomePage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Menu" component={TabNavigations} />
        <Stack.Screen name="User-Menu" component={UserMenuTabNavigations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigaton;
