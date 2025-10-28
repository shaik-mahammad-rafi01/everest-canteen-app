import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Canteen from '../components/Canteen';
import Order from '../components/Order';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Tab = createBottomTabNavigator();
export const TabNavigations = () => {
  return (
    <SafeAreaProvider>
    <Tab.Navigator>
      <Tab.Screen  name="Menu" component={Canteen} />
      <Tab.Screen name="Order" component={Order} />
    </Tab.Navigator>
    </SafeAreaProvider>
  );
};
