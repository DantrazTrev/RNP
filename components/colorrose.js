import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const ColorRose = ({Colors}) => {
    return (
        <FlatList
        data={colors.slice(0,5)}
        keyExtractor={(item, idx) => idx}
        renderItem={({ item }) => {
          return (
            <View
              style={[styles.box],{backgroundColor:item.hexCode}}
            />
        
            
          )
            }}/>
}

export default ColorRose;

const styles=StyleSheet.create({
    box:{
        width:10,
        height:10,

    }
})
