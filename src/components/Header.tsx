import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles/Canteen';
import { Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>Everest Canteen 🍲</Text>
    </View>
  );
};

export default Header;
