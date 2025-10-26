import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { styles } from '../styles/Canteen';

type CardItemProps = {
  item: { Name: string; Price: number; Image: string };
  Delete : (itemName:string)=>void
};

const CardItem = ({ item , Delete}: CardItemProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image style={styles.image} source={{ uri: item.Image }} />
          <Text>{item.Name}</Text>
          <Text>Price : ₹ {item.Price}</Text>

          <Pressable onPress={()=>Delete(item.Name)}>
            <Text style={styles.RemoveBtn}>Remove</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CardItem;
