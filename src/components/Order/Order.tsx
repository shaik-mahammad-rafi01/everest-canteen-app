import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { MenuItem } from '../../types/menu';
import { OrderStyles } from './OrderStyles';

const Order = () => {
  const [orders, setOrders] = useState<MenuItem[]>([]);
  
  const getOrders = async ()=> {
    const response = await fetch('http://localhost:3000/getOrder');
    const allOrders = await (response.json());
    setOrders(allOrders);
    console.log(allOrders)
   
  };
  useEffect(() => {
    getOrders();
    
  },[]);

  return (
    <View>
      <View>
        <Text>Order</Text>
      </View>
      <View>
        <FlatList
          data={orders}
         
          renderItem={({ item }) => (
            <View style={OrderStyles.itemContainer}>
              <Text style = {OrderStyles.name}>{item.name}</Text>
              <Text>{item.price}</Text>
              <Image style={OrderStyles.image} source={{ uri: item.image }} />
            </View>
            
          )}
        />
        
      </View>
    </View>
  );
};

export default Order;
