import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState, useCallback } from 'react';
import { COLORS } from '../data';

const CPModal = ({ navigation }) => {
  const [PalateName, setPalateName] = useState('');
  const [AuthName, setAuthName] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const handleSubmit = useCallback(() => {
    if (!PalateName) {
      Alert.alert(
        "You know Apple won't be keen with this Palette Name , why not try something else"
      );
    } else if (!AuthName || AuthName === 'Color Overlord') {
      Alert.alert("Hei, I'm the Color Overlord");
    } else if (selectedColors.length < 2) {
      Alert.alert(
        `Wait you got how many colors?? Just ${selectedColors.length} Really!!!???`
      );
    } else {
      const newPalette = {
        colors: selectedColors,
        paletteName: PalateName,
      };
      navigation.navigate('Colors', { newPalette });
    }
  }, [PalateName, selectedColors]);
  const handleChange = useCallback(
    (value, item) => {
      if (value) {
        setSelectedColors((current) => [...current, item]);
      } else {
        setSelectedColors((current) =>
          current.filter((color) => color.colorName !== item.colorName)
        );
      }
    },
    [selectedColors]
  );

  return (
    <View style={styles.container}>
      <Text>Name of the Palette</Text>
      <TextInput
        style={styles.input}
        placeholder='ex.My stolen Apples collection'
        value={PalateName}
        onChangeText={setPalateName}
      />
      <Text>What should we call you</Text>
      <TextInput
        value={AuthName}
        onChangeText={setAuthName}
        style={styles.input}
        placeholder='ex.Color Overlord'
      />

      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.colorName.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.switch}>
              <Text>{item.colorName} </Text>
              <Switch
                trackColor={{ true: item.hexCode, false: 'grey' }}
                value={
                  !!selectedColors.find(
                    (color) => color.colorName === item.colorName
                  )
                }
                onValueChange={(value) => {
                  handleChange(value, item);
                }}
              />
            </View>
          );
        }}
      />
      <TouchableOpacity onPress={handleSubmit} styles={styles.buttonWrapper}>
        <View style={styles.button}>
          <Text style={[styles.buttonText]}>Submit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CPModal;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 7,
    marginVertical: 10,
    borderRadius: 5,
    fontSize: 18,
  },
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  list: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  heading: {
    padding: 10,
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    height: 100,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
