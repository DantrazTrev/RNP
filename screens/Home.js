import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ColorRose from '../components/colorrose';
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
              style={styles.item}
            >
              <Text style={styles.text}>{item.name}</Text>
              <ColorRose
                colors={item.colors}
                onPress={() => {
                  navigation.navigate('ColorPalette', {
                    name: item.name,
                    ColorPalette: item.colors,
                  });
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  item: {
    marginHorizontal: 20,
    paddingTop: 10,
  },
});

export default Home;
