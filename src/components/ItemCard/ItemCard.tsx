import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { ItemsCardStyles } from './ItemCardStyles';

type CardItemProps = {
  item: { Name: string; Price: number; Image: string };
  Delete: (itemName: string) => void
  role : string
};

const CardItem = ({ item, Delete ,role}: CardItemProps) => {
  
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
            {role === 'User' ? 
            <Pressable>
              <Text style={ItemsCardStyles.RemoveBtn}>Add</Text>
            </Pressable> : 
            <Pressable onPress={()=>Delete(item.Name)}>
              <Text style={ItemsCardStyles.RemoveBtn}>Remove</Text>
            </Pressable>
            }
            
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardItem;
