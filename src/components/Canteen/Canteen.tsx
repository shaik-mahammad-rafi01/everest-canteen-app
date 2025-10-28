import { Pressable, SectionList, Text, View } from 'react-native';
import { styles } from '../../styles/Canteen';
import { CanteenItems } from '../../data/menu';
import Header from '../Header/Header';
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import CardItem from '../ItemCard/ItemCard';

const Canteen = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [presentSection, setPresentSection] = useState('');
  const [canteenItems, setCanteenItems] = useState(CanteenItems);

  const AddItem = (SectionName: string, itemName: string, price: number) => {
    setCanteenItems(previousData =>
      previousData.map(section =>
        section.FoodType === SectionName
          ? {
              ...section,
              data: [
                ...section.data,
                { Name: itemName, Price: price, Image: '' },
              ],
            }
          : section,
      ),
    );
    setIsModalOpen(false);
  };
  const DeleteItem = (SectionName: string, itemName: string) => {
    setCanteenItems(previousData =>
      previousData.map(section =>
        section.FoodType === SectionName
          ? {
              ...section,
              data: section.data.filter(item => item.Name !== itemName),
            }
          : section,
      ),
    );
  };

  return (
    <View>
      <Header />
      <SectionList
        sections={canteenItems}
        keyExtractor={(item, index) => item.Name + index}
        renderItem={({ item, section }) => (
          <CardItem
            item={item}
            Delete={itemName => DeleteItem(section.FoodType, itemName)}
          />
        )}
        renderSectionHeader={({ section: { FoodType, data } }) => (
          <View style={styles.header}>
            <Text>{FoodType}</Text>
            <Text>{data.length}</Text>
            <Pressable
              style={styles.AddBtn}
              onPress={() => {
                setPresentSection(FoodType);
                setIsModalOpen(true);
              }}
            >
              <Text>Add</Text>
            </Pressable>
          </View>
        )}
      />
      {isModalOpen && (
        <View style={styles.modalViewContainer}>
          <Modal
            sectionName={presentSection}
            onClose={() => setIsModalOpen(false)}
            addItem={(name: string, price: number) =>
              AddItem(presentSection, name, price)
            }
          />
        </View>
      )}
    </View>
  );
};

export default Canteen;
