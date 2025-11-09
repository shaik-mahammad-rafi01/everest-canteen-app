import { Pressable, SectionList, Text, View } from 'react-native';
import { CanteenMenuStyles } from './CanteenMenuStyles';
import { CanteenItems } from '../../data/menu';
import Header from '../Header/Header';
import React, { useState } from 'react';
import CardItem from '../ItemCard/ItemCard';
import AddItemModal from '../Modal/Modal';

const CanteenMenu = () => {
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
  const handleDeleteItem = (SectionName: string, itemName: string) => {
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
            onDelete={(itemName: string) =>
              handleDeleteItem(section.FoodType, itemName)
            }
            role={''}
          />
        )}
        renderSectionHeader={({ section: { FoodType, data } }) => (
          <View style={CanteenMenuStyles.header}>
            <Text>{FoodType}</Text>
            <Text>{data.length}</Text>
            <Pressable
              style={CanteenMenuStyles.AddBtn}
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
        <View style={CanteenMenuStyles.modalViewContainer}>
          <AddItemModal
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

export default CanteenMenu;
