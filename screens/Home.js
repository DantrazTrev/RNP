import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../data';

const Home = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={COLORS}
        keyExtractor={(item, idx) => idx}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ColorPalette', {
                  name: item.name,
                  ColorPalette: item.colors,
                });
              }}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;
