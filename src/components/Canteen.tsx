import { Button, Image,  SectionList, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/Canteen';
import { CanteenItems } from '../data/menu';
import Header from './Header';
import React, { useState } from 'react';
import Modal from './Modal';

const Canteen = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
        renderSectionHeader={({ section: { FoodType , data} }) => (
          <View style={styles.header}>
            <Text >{FoodType}</Text>
            <Text>{data.length}</Text>
            <Button title='Add' color='green' onPress={()=>setIsModalOpen(true)}/>
          </View>
        )} />
        {isModalOpen && (
            <View style = {{position: 'absolute'}}>
                <Modal onClose={() => setIsModalOpen(false)} />
            </View>
        )}        

     </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Canteen;
