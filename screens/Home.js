import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../data';

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette', {
            name: 'Solarized',
            ColorPalette: COLORS.Solarized,
          });
        }}
      >
        <Text>Solarized</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
