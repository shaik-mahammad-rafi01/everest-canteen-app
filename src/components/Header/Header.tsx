import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderStyles } from './HeaderStyles';

const Header = ({navigation} : any) => {
  return (
    <SafeAreaView>
      <View style={HeaderStyles.headerContainer}>
        <View>
          <Image style={HeaderStyles.icon} source={require('../asserts/icon.png')} />
        </View>
        <View style={HeaderStyles.headingContainer}>
          <Text style={HeaderStyles.heading}>Everest Canteen 🍲</Text>
        </View>
        <View style = {HeaderStyles.logoutBtn}>
          <Pressable onPress={()=>navigation.navigate("home")}>
            <Text>Logout</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
