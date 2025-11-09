import React, { useState } from 'react';
import { View, SectionList, Text, Pressable } from 'react-native';
import { CanteenMenuStyles } from '../CanteenMenu/CanteenMenuStyles';
import CardItem from '../ItemCard/ItemCard';
import { CanteenItems } from '../../data/menu';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserStyles } from './UserStyles';

const UserMenu = ({ navigation }: any) => {
  const [canteenItems] = useState(CanteenItems);

  return (
    <SafeAreaView>
      <View >
        <View style={UserStyles.container}>
        <View>
          <Text style={UserStyles.Header}>Our Menu</Text>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('home')} style={UserStyles.logoutBtn2}>
            <Text>Logout</Text>
          </Pressable>
        </View>
        </View>

        <SectionList
          sections={canteenItems}
          keyExtractor={(item, index) => item.name + index}
          renderItem={({ item }) => (
            <CardItem item={item} Delete={() => ''} role={'User'} />
          )}
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
