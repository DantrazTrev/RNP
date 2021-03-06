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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
