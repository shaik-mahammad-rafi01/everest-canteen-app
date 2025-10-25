import { Button, Image,  Pressable,  SectionList, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/Canteen';
import { CanteenItems } from '../data/menu';
import Header from './Header';
import React, { useState } from 'react';
import Modal from './Modal';

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
          <View style={styles.mainContainer}>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Image  style = {styles.image}source={{ uri: item.Image }}/>
              <Text>{item.Name}</Text>
              <Text>{item.Price}</Text>
               
              <Pressable>
                <Text style = {styles.RemoveBtn}>Remove</Text>
            </Pressable>
              
            </View>
          </View>
          </View>
         
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
