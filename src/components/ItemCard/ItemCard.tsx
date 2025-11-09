import React from 'react';
import { View, Text, Image } from 'react-native';
import { ItemsCardStyles } from './ItemCardStyles';
import Button from '../Button/Button';

type CardItemProps = {
  item: { Name: string; Price: number; Image: string };
  onDelete: (itemName: string) => void
  role : string
};

const CardItem = ({ item, onDelete ,role}: CardItemProps) => {
  
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
            <Button title="Add" onPress={()=> {} } />
             : 
            <Button title="Remove" onPress={()=>onDelete(item.Name)} style={ItemsCardStyles.RemoveBtn}/> 
            }
            
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardItem;
