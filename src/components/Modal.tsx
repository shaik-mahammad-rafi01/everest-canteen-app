import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from '../styles/Canteen';

const Modal = ({ onClose }: { onClose: () => void }) => {

const [itemName , setItemName] =useState("")
const [price , setPrice] = useState('')

  return (
    <SafeAreaProvider>
    <View style={styles.container}>
        
        <Text>{}</Text>
        <Text>Item Name : </Text>
        <TextInput   placeholder='Enter the item name ' value = {itemName} onChangeText = {setItemName}/>
        <Text>Price : </Text>
        <TextInput  placeholder='enter the price' value = {price} onChangeText={setPrice}/>
        <Button title='Add Item'/>
        <Button title="Close" onPress={onClose} />
    </View>
    </SafeAreaProvider>
  );
}

export default Modal;



