import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Order from '../components/Order/Order';
import { NavigationContainer } from '@react-navigation/native';
import CanteenMenu from '../components/CanteenMenu/CanteenMenu';
const Tab = createBottomTabNavigator();
export const TabNavigations = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Canteen Menu"
        screenOptions={{ animation: 'shift' }}
      >
        <Tab.Screen
          name="Canteen Menu"
          component={CanteenMenu}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Order" component={Order} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
