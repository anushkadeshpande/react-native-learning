import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Card</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>

        <View style={[styles.card, styles.cardTwo]}>
          <Text>Red</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
          <Text>Red</Text>
        </View>

        <View style={[styles.card, styles.cardTwo]}>
          <Text>Red</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
 headingText: {
  fontSize: 25,
  fontWeight: 'bold',
  paddingHorizontal: 8
 }, 

 container: {
  flex: 1,
  flexDirection: 'row',
  padding: 8
 },

 card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 8
 },

 cardOne: {
    backgroundColor: '#46c3db'
 },

 cardTwo: {
  backgroundColor: '#581b98'
},

cardThree: {
  backgroundColor: '#e41749'
}
})

export default FlatCard