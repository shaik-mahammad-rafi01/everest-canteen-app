import notifee from '@notifee/react-native';
import { Platform } from 'react-native';
import { getApplicationName } from 'react-native-device-info';

export const handleOrderNotification = async () => {


    const MyAppName = Platform.OS === 'ios' ? await getApplicationName() : "Everest Canteen";
    if (Platform.OS === "ios") {
        await notifee.requestPermission();
    }
    else if (Platform.OS === "android") {
        await notifee.requestPermission();
    }
    const channelId = await notifee.createChannel({
        id: "Hey_Rafi",
        name: "Order got placed !",
        sound: 'default',

    })
    await notifee.displayNotification({
        title: `${MyAppName}`,
        subtitle: "Hello Rafi ",
        body: 'Your order got placed!',
        android: {
            channelId,
            sound:'default'
        },
        ios: {
            sound: 'default'
        },

    });

};