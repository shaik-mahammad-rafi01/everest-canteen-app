import React from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderStyles } from './HeaderStyles';
import {ProfileImage} from '../ProfileImage/ProfileImage'

const Header = () => {
  return (
    <SafeAreaView>
      <View style={HeaderStyles.headerContainer}>
          <ProfileImage />
        <View>
          <Image style={HeaderStyles.icon} source={require('../asserts/icon.png')} />
        </View>
        <View style={HeaderStyles.headingContainer}>
          <Text style={HeaderStyles.heading}>Everest Canteen 🍲</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
