import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Order from '../components/Order/Order';
import UserMenu from '../components/UserMenu/UserMenu';
const Tab = createBottomTabNavigator();
export const UserMenuTabNavigations = () => {
  return (
    <Tab.Navigator
      
      screenOptions={{ animation: 'shift' }}
    >
      <Tab.Screen
        name="UserMenu"
        component={UserMenu}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Order" component={Order} />
    </Tab.Navigator>
  );
};
