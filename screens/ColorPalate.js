import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Colorbox from '../components/colorbox';
const ColorPalette = () => {
  const COLORS = [
    { colorName: 'Base03', hexCode: '#002b36' },
    { colorName: 'Base02', hexCode: '#073642' },
    { colorName: 'Base01', hexCode: '#586e75' },
    { colorName: 'Base00', hexCode: '#657b83' },
    { colorName: 'Base0', hexCode: '#839496' },
    { colorName: 'Base1', hexCode: '#93a1a1' },
    { colorName: 'Base2', hexCode: '#eee8d5' },
    { colorName: 'Base3', hexCode: '#fdf6e3' },
    { colorName: 'Yellow', hexCode: '#b58900' },
    { colorName: 'Orange', hexCode: '#cb4b16' },
    { colorName: 'Red', hexCode: '#dc322f' },
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Violet', hexCode: '#6c71c4' },
    { colorName: 'Blue', hexCode: '#268bd2' },
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Green', hexCode: '#859900' },
  ];
  return (
    <FlatList
      data={COLORS}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <Colorbox color={item.hexCode} text={item.colorName} />
      )}
      ListHeaderComponent={
        <Text style={[{ fontWeight: 'bold' }, styles.heading]}>Solarized</Text>
      }
    />
  );
};

const styles = StyleSheet.create({
  cyan: { backgroundColor: '#2aa198' },
  blue: { backgroundColor: '#268bd2' },
  magenta: { backgroundColor: '#d33682' },
  orange: { backgroundColor: '#cb4b16' },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 10,
  },
  heading: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 30,
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
