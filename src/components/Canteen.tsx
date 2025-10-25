import React from 'react';
import { Image, SectionList, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/Canteen';
import { CanteenItems } from '../data/menu';
import Header from './Header';
const Canteen = () => {
  return (
<SafeAreaProvider>
    <SafeAreaView>
        <Header />
      <SectionList
        sections={CanteenItems}
        keyExtractor={(item, index) => item.Name + index}
        renderItem={({ item }) => (
          <View style={styles.mainContainer}>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Image  style = {styles.image}source={{ uri: item.Image }}/>
              <Text>{item.Name}</Text>
              <Text>{item.Price}</Text>
            </View>
          </View>
          </View>
         
        )}
        renderSectionHeader={({ section: { FoodType } }) => (
          <View style={styles.header}><Text >{FoodType}</Text></View>
        )} />

    </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Canteen;
