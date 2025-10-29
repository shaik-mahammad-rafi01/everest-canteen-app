import React from 'react';
import { Image, View } from 'react-native';
import { styles } from '../../styles/Canteen';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View>
          <Image style={styles.icon} source={require('../asserts/icon.png')} />
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Everest Canteen 🍲</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
