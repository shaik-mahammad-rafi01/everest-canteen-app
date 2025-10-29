import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { ItemsCardStyles } from './ItemCardStyles';

type CardItemProps = {
  item: { Name: string; Price: number; Image: string };
  Delete: (itemName: string) => void
};

const CardItem = ({ item, Delete }: CardItemProps) => {
  
  return (
    <View style={ItemsCardStyles.mainContainer}>
      <View style={ItemsCardStyles.cardContainer}>
        <View style={ItemsCardStyles.card}>
          <View>
            <Image style={ItemsCardStyles.image} source={{ uri: item.Image }} />
          </View>
          <View style={ItemsCardStyles.imageTextContainer}>
            <Text>{item.Name}</Text>
            <Text>Price : ₹ {item.Price}</Text>
          </View>

          <View>
            <Pressable onPress={()=>Delete(item.Name)}>
              <Text style={ItemsCardStyles.RemoveBtn}>Remove</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardItem;
