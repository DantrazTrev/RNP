import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  const screens = ['Colors', 'Counter'];
  return (
    <View style={styles.container}>
      <FlatList
        data={screens}
        style={styles.list}
        keyExtractor={(item, idx) => item}
        renderItem={({ item, idx }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(item);
              }}
              style={styles.item}
            >
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  item: {
    marginHorizontal: 20,
    paddingTop: 10,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default Home;
