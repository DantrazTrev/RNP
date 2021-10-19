import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Colorbox from '../components/colorbox';
const ColorPalette = ({ route }) => {
  console.log(route.colors);
  return (
    <FlatList
      data={route.params.ColorPalette}
      keyExtractor={(item) => item.hexCode}
      style={styles.container}
      renderItem={({ item }) => (
        <Colorbox color={item.hexCode} text={item.colorName} />
      )}
      ListHeaderComponent={
        <Text style={[{ fontWeight: 'bold' }, styles.heading]}>
          {route.params.name}
        </Text>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
    backgroundColor: 'white',
  },
  heading: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: 10,
    padding: 10,
    fontSize: 15,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorPalette;
