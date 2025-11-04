import React, { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { Modal } from 'react-native';
import { ModalStyles } from './ModalStyles';
type ModalProps = {
  sectionName: string;
  onClose: () => void;
  addItem: (name: string, price: number , id:number ) => void;
};

const AddItemModal = ({ sectionName, onClose, addItem }: ModalProps) => {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState<string>('');

  const handleFormInputs = () => {
    if (!itemName || !price ) {
      Alert.alert('fill all fields');
      return;
    }
    const NumPrice = Number(price);

    if (isNaN(NumPrice) || NumPrice <= 0) {
      Alert.alert('invalid price');
      return;
    }
    const id = Date.now();
    addItem(itemName, NumPrice  , id );
  };

  return (
    <Modal visible={true} animationType="slide" backdropColor={'#F5B301'}>
      <View style={ModalStyles.container}>
        <Text style={ModalStyles.modalHeader}>Add {sectionName}</Text>
        <Text>Item Name : </Text>
        <TextInput
          style={ModalStyles.inputs}
          placeholder="Enter the item name "
          value={itemName}
          onChangeText={setItemName}
        />
        <Text>Price : </Text>
        <TextInput
          style={ModalStyles.inputs}
          placeholder="enter the price"
          value={price}
          onChangeText={setPrice}
        />
        <View style={ModalStyles.modalBtnContainer}>
          <Pressable onPress={handleFormInputs}>
            <Text style={ModalStyles.modalAddBtn}>Add</Text>
          </Pressable>
          <Pressable onPress={onClose}>
            <Text style={ModalStyles.modalRevoveBtn}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default AddItemModal;
