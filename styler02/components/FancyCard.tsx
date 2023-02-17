import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
        source={{
            uri: 'https://readingielts.b-cdn.net/wp-content/uploads/2021/03/Describe-a-place-that-you-dont-like-1.png'
        }} 
        style={styles.cardImage}
        />

        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>A place</Text>
            <Text style={styles.cardLabel}>A city</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac tellus nec ligula consectetur volutpat tincidunt ac diam. Donec tincidunt interdum bibendum. Donec ultricies eget odio eu molestie. Integer iaculis.</Text>
            <Text style={styles.cardFooter}>Footer</Text>
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

    card: {},

    cardElevated: {},

    cardImage: {
        height: 180
    },

    cardBody: {},

    cardTitle: {},

    cardLabel: {},

    cardDescription: {},

    cardFooter: {}
})