import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { styles } from '../styles/Canteen';

type CardItemProps = {
  item: { Name: string; Price: string; Image: string };
};

const CardItem = ({ item }: CardItemProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image style={styles.image} source={{ uri: item.Image }} />
          <Text>{item.Name}</Text>
          <Text>{item.Price}</Text>

          <Pressable >
            <Text style={styles.RemoveBtn}>Remove</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CardItem;
