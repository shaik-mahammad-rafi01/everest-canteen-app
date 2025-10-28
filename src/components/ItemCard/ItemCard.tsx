import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { styles } from '../../styles/Canteen';

type CardItemProps = {
  item: { Name: string; Price: number; Image: string };
  Delete: (itemName: string) => void;
};

const CardItem = ({ item, Delete }: CardItemProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View>
            <Image style={styles.image} source={{ uri: item.Image }} />
          </View>
          <View style={styles.imageTextContainer}>
            <Text>{item.Name}</Text>
            <Text>Price : ₹ {item.Price}</Text>
          </View>

          <View>
            <Pressable onPress={() => Delete(item.Name)}>
              <Text style={styles.RemoveBtn}>Remove</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardItem;
