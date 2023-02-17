import { Linking, StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card]}>
      <View style={[styles.headerContainer]}></View>
      <View style={[styles.headerText]}>
        <Text>Dummy header text</Text>
      </View>

      <Image 
      source={{
        uri:  "https://howtodrawforkids.com/wp-content/uploads/2021/10/How-to-draw-a-Panda-Face-for-kindergarten.jpg"
      }}
      
      style={styles.cardImage}
      />

      <View style={styles.bodyContainer}>
        <Text numberOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac tellus nec ligula consectetur volutpat tincidunt ac diam. Donec tincidunt interdum bibendum. Donec ultricies eget odio eu molestie. Integer iaculis.</Text>
      </View>


      <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://www.google.com/')}> 
                <Text style={styles.socialLink}>Read More</Text>
            </TouchableOpacity>
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

       card: {

       },

       headerContainer: {

       },

       headerText: {},

       cardImage: {
        height: 250
       },

       bodyContainer: {},

       footerContainer: {},

       socialLink: {
        padding: 5,
        backgroundColor: '#10316b',
        width: 120,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 10
       }
})