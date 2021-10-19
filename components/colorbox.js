import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Colorbox(props) {
  const backgroundColor = { backgroundColor: props.color };
  const textColor = {
    color:
      parseInt(props.color.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.container, backgroundColor]}>
      <Text style={[styles.text, textColor]}>
        {props.text} {props.color}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
