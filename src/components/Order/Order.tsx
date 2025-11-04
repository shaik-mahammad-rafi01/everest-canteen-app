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
    
  },[orders]);

  return (
    <View>
      <View>
        <FlatList
          data={orders}
         
          renderItem={({ item }) => (
            <View style={OrderStyles.itemContainer}>
              <Image style={OrderStyles.image} source={{ uri: item.image }} />
              <Text style = {OrderStyles.name}>{item.name}</Text>
              <Text>Rs . {item.price}</Text>
              
            </View>
            
          )}
        />
        
      </View>
    </View>
  );
};

export default Order;
