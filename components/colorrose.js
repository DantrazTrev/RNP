import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const ColorRose = ({ colors, onPress }) => {
  return (
    <FlatList
      data={colors.slice(0, 5)}
      keyExtractor={(item) => item.colorName}
      style={styles.list}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={onPress}>
            <View
              style={[styles.box, { backgroundColor: item.hexCode }]}
            ></View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default ColorRose;

const styles = StyleSheet.create({
  box: {
    width: 30,
    height: 30,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  list: {
    flexDirection: 'row',
  },
});
