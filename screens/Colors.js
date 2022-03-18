import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ColorRose from '../components/colorrose';

const Colors = ({ navigation }) => {
  const [COLORS, setColors] = useState([]);
  const [Isrefreshing, setIsrefreshing] = useState(false);

  const fetchColors = useCallback(async () => {
    await fetch('https://color-palette-api.kadikraman.now.sh/palettes').then(
      async (result) => {
        if (result.ok) {
          const colors = await result.json();

          setColors(colors);
        }
      },
      (err) => {
        console.log('to');
      }
    );
  }, []);
  const handleRefresh = useCallback(async () => {
    setIsrefreshing(true);
    await fetchColors();
    setTimeout(() => {
      setIsrefreshing(false);
    }, 1069);
  });
  useEffect(() => {
    fetchColors();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={COLORS}
        style={styles.list}
        keyExtractor={(item, idx) => item.id}
        renderItem={({ item, idx }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ColorPalette', {
                  name: item.paletteName,
                  ColorPalette: item.colors,
                });
              }}
              style={styles.item}
            >
              <Text style={styles.text}>{item.paletteName}</Text>
              <ColorRose
                colors={item.colors}
                onPress={() => {
                  navigation.navigate('ColorPalette', {
                    name: item.paletteName,
                    ColorPalette: item.colors,
                  });
                }}
              />
            </TouchableOpacity>
          );
        }}
        refreshing={Isrefreshing}
        onRefresh={handleRefresh}
        // refreshControl={<RefreshControl refreshing onRefresh={() => {}} />}
        // ListFooterComponent={() => (
        //   <>
        //     <TouchableOpacity
        //       onPress={() => navigation.navigate('Counter', {})}
        //     >
        //       <Text style={[styles.counter, styles.text]}>Counter</Text>
        //     </TouchableOpacity>
        //   </>
        // )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  counter: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  item: {
    marginHorizontal: 20,
    paddingTop: 10,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});

export default Colors;
