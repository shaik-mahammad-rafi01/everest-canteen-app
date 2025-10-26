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
    const [canteenItems, setCanteenItems] = useState(CanteenItems);


const AddItem = (presentSection: string, itemName: string, price: number) => {
  setCanteenItems(previousData =>
    previousData.map(section => section.FoodType===presentSection ? {
            ...section,
            data: [...section.data,{ Name: itemName, Price: price, Image: '' },],
          }
        : section
    )
  );
  setIsModalOpen(false);
};
const DeleteItem = (presentSection:string , itemName:string) =>{
    setCanteenItems(previousData=>
        previousData.map(section => section.FoodType === presentSection ?
            {
               ...section, data: section.data.filter(item=> item.Name !== itemName)
            } : section
        ) 
        
    )
}

  return (
<SafeAreaProvider>
    <SafeAreaView>
        <Header />
      <SectionList
        sections={canteenItems}
        keyExtractor={(item, index) => item.Name + index}
        renderItem={({ item , section }) => (
            <CardItem item={item} Delete={(itemName)=>DeleteItem(section.FoodType, itemName)}/>
         
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
                <Modal sectionName = {presentSection} onClose={() => setIsModalOpen(false)} addItem={(name:string, price:number) => AddItem(presentSection, name, price)}/>
            </View>
        )}   

     </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Canteen;
