import notifee from '@notifee/react-native';
import { Platform } from 'react-native';
import { getApplicationName } from 'react-native-device-info';

export const handleOrderNotification = async () => {

    await notifee.requestPermission();
    const MyAppName = Platform.OS === 'ios' ? await getApplicationName() : "Everest Canteen";


    await notifee.displayNotification({
        title: `${MyAppName}`,
        subtitle: "Hello Rafi ",
        body: 'Your order got placed!',
        ios: {
            sound: 'default'
        },
    });

};