import { SafeAreaView, Linking, StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }

  return (
    <SafeAreaView>
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={styles.card}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Dummy header text</Text>
      
      </View>

      <Image 
      source={{
        uri:  "https://howtodrawforkids.com/wp-content/uploads/2021/10/How-to-draw-a-Panda-Face-for-kindergarten.jpg"
      }}
      
      style={styles.cardImage}
      />

      <View style={styles.bodyContainer}>
        <Text numberOfLines={3} style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac tellus nec ligula consectetur volutpat tincidunt ac diam. Donec tincidunt interdum bibendum. Donec ultricies eget odio eu molestie. Integer iaculis.</Text>
      </View>


      <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://www.google.com/')}> 
                <Text style={styles.socialLink}>Read More</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 8
       }, 

       card: {
            width: 350,
            height: 400,
            borderRadius: 10,
            marginVertical: 12,
            marginHorizontal: 16,
            backgroundColor: '#fff'
       },

       headerContainer: {
            height: 40,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
       },

       headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
       },

       cardImage: {
        height: 250,
        borderRadius: 10
       },

       bodyContainer: {
        padding: 10
    },

       bodyText: {
        color: '#000',
       },

       footerContainer: {
        // color: '#000', 
       },

       socialLink: {
        padding: 5,
        backgroundColor: '#10316b',
        width: 120,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 10,
        // flex: 1,
        // alignItems: 'center'
        alignSelf: 'center',
       }
})