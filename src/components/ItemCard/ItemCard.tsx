import React from 'react';
import { View, Text, Image, Pressable, Alert } from 'react-native';
import { ItemsCardStyles } from './ItemCardStyles';

type CardItemProps = {
  item: { name: string; price: number; image: string };
  Delete: (itemName: string) => void
  role : string
};

const CardItem = ({ item, Delete ,role}: CardItemProps) => {
  const handleAddOrder = async()=>{
    const postOrder = await fetch("http://localhost:3000/order" , {
      method:"POST",
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify({image : item.image , name : item.name , price : item.price })
    });
    if(postOrder){
      Alert.alert("Success" , "Item added to Orders");
    }
  } 
  
  return (
    <View style={ItemsCardStyles.mainContainer}>
      <View style={ItemsCardStyles.cardContainer}>
        <View style={ItemsCardStyles.card}>
          <View>
            <Image style={ItemsCardStyles.image} source={{ uri: item.image }} />
          </View>
          <View style={ItemsCardStyles.imageTextContainer}>
            <Text>{item.name}</Text>
            <Text>Price : ₹ {item.price}</Text>
          </View>

          <View>
            {role === 'User' ? 
            <Pressable>
              <Text style={ItemsCardStyles.RemoveBtn} onPress={handleAddOrder}>Add</Text>
            </Pressable> : 
            <Pressable onPress={()=>Delete(item.name)}>
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
