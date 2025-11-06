import React, { useState } from 'react';
import { View, SectionList, Text } from 'react-native';
import { CanteenMenuStyles } from '../CanteenMenu/CanteenMenuStyles';
import CardItem from '../ItemCard/ItemCard';
import { CanteenItems } from '../../data/menu';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserStyles } from './UserStyles';

const UserMenu = () => {
  const [canteenItems] = useState(CanteenItems);

  return (
    <SafeAreaView>
      <View>
        <Text style={UserStyles.Header}>Our Menu</Text>
        <SectionList
          sections={canteenItems}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item }) => <CardItem item={item} Delete={() => ''} role={'User'} />}
          renderSectionHeader={({ section: { FoodType, data } }) => (
            <View style={CanteenMenuStyles.header}>
              <Text>{FoodType}</Text>
              <Text>{data.length}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default UserMenu;
