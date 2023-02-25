import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
        id: 1, 
        name: 'KNJ',
        imageUrl: 'https://fcbk.su/_data/stickers/tinytan/tinytan_00.png'
    },
    {
        id: 2, 
        name: 'KSJ',
        imageUrl: 'https://fcbk.su/_data/stickers/tinytan/tinytan_01.png'
    },
    {
        id: 3, 
        name: 'MYG',
        imageUrl: 'https://fcbk.su/_data/stickers/tinytan/tinytan_02.png'
    },
    {
        id: 4, 
        name: 'JHS',
        imageUrl: 'https://fcbk.su/_data/stickers/tinytan/tinytan_03.png'
    },
    {
        id: 5, 
        name: 'PJM',
        imageUrl: 'https://fcbk.su/_data/stickers/tinytan/tinytan_04.png'
    },
    {
        id: 6, 
        name: 'KTH',
        imageUrl: 'https://fcbk.su/_data/stickers/tinytan/tinytan_05.png'
    },
    {
        id: 7, 
        name: 'JJK',
        imageUrl: 'https://fcbk.su/_data/stickers/tinytan/tinytan_06.png'
    },
  ];
  return (
    <View >
      <Text style={styles.headingText}>Cute Characters</Text>
      <ScrollView style={styles.container} scrollEnabled={true} horizontal>
        {contacts.map(({id, name, imageUrl}) => (
            <View key={id} style={styles.userCard}>
            <Image source={{
                uri: imageUrl
            }}
            
            style={styles.userImage}
            />
          <Text style={styles.userText}>
            {name}
          </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },

  container: {},

  userCard: {
    height: 200,
    width:150,
    backgroundColor: '#fffff',
    flex: 1,
    alignItems: 'center'
  },

  userImage: {
    height: 150,
    width: 150
  },

  userText: {
    textAlign: 'center'
  }
});
