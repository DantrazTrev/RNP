import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Counter = () => {
  const [count, setcount] = useState(0);
  const Inc = useCallback(() => {
    setcount((currentValue) => currentValue + 1);
  }, []);
  const Dec = useCallback(() => {
    setcount((currentValue) => currentValue - 1);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{count}</Text>
      <View style={styles.button}>
        <TouchableOpacity onPress={Inc}>
          <Text style={styles.btn}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Dec}>
          <Text style={styles.btn}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
  },
  heading: {
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  btn: {
    fontSize: 25,
  },
});
