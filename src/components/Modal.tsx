import React, { useState } from 'react';
import { Alert, Button, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from '../styles/Canteen';
type ModalProps = {
  sectionName: string;
  onClose: () => void;
  addItem: (name: string, price: number) => void;
};

const Modal = ({ sectionName, onClose, addItem }: ModalProps) => {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState<string>('');

  const handleFormInputs = () => {
    if (!itemName || !price) {
      Alert.alert('fill all fields');
      return;
    }
    const NumPrice = Number(price);

    if (isNaN(NumPrice) || NumPrice <= 0) {
      Alert.alert('invalid price');
      return;
    }
    addItem(itemName, NumPrice);
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.modalHeader}>{sectionName}</Text>
        <Text>Item Name : </Text>
        <TextInput
          placeholder="Enter the item name "
          value={itemName}
          onChangeText={setItemName}
        />
        <Text>Price : </Text>
        <TextInput
          placeholder="enter the price"
          value={price}
          onChangeText={setPrice}
        />
        <Button title="Add Item" onPress={handleFormInputs} />
        <Button title="Close" onPress={onClose} />
      </View>
    </SafeAreaProvider>
  );
};

export default Modal;
