import React from 'react';
import { View, Text, Platform } from 'react-native';
import Button from '../Button/Button';
import { OrderStyles } from './OrderStyles';
import { handleOrderNotification } from '../../Utils/OrderNotification';
const Order = () => {
  return (
    <View style={OrderStyles.container}>
      <View style={OrderStyles.orderSubmitButtonContainer}>
        <Button title={'Place Order'} onPress={handleOrderNotification} />
      </View>
    </View>
  );
};

export default Order;
