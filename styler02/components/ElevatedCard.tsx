import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
      </ScrollView>
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
        padding :8,
    },
    card: {
        width:100,
        height: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        margin: 8,
    },

    cardElevated: {
        backgroundColor: '#ea7dc7',
        elevation: 4,
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowColor: "#e41749",
        shadowOpacity:0.4,
        shadowRadius: 2
    }

})