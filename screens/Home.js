import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ColorRose from '../components/colorrose';
import { COLORS } from '../data';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
      <TouchableOpacity
        style={styles.heading}
        onPress={() => navigation.navigate('Counter')}
      >
        <Text style={styles.text}>Counter</Text>
      </TouchableOpacity>
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
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});

export default Home;
