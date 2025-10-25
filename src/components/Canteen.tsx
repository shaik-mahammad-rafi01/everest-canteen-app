import { Button, SectionList, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/Canteen';
import { CanteenItems } from '../data/menu';
import Header from './Header';
import React, { useState } from 'react';
import Modal from './Modal';
import CardItem from './ItemCard';

const Canteen = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [presentSection , setPresentSection] = useState("")

  return (
<SafeAreaProvider>
    <SafeAreaView>
        <Header />
      <SectionList
        sections={CanteenItems}
        keyExtractor={(item, index) => item.Name + index}
        renderItem={({ item }) => (
            <CardItem item={item} />
         
        )}
        renderSectionHeader={({ section: { FoodType , data} }) => (
          <View style={styles.header}>
            <Text >{FoodType}</Text>
            <Text>{data.length}</Text>
            <Button title='Add' color='green' onPress={()=> {setPresentSection(FoodType);  setIsModalOpen(true)}}/>
          </View>
        )} />
        {isModalOpen && (
            <View style = {{position: 'absolute'}}>
                <Modal sectionName = {presentSection} onClose={() => setIsModalOpen(false)} />
            </View>
        )}   

     </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Canteen;
