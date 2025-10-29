import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Canteen from '../components/Canteen/Canteen';
import Order from '../components/Order/Order';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();
export const TabNavigations = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Menu"
        screenOptions={{ animation: 'shift' }}
      >
        <Tab.Screen
          name="Menu"
          component={Canteen}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Order" component={Order} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
