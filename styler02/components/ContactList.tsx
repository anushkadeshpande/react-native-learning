import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
        id: 1, 
        name: 'KNJ',
        imageUrl: 'https://w0.peakpx.com/wallpaper/624/449/HD-wallpaper-tiny-tan-rm-bangtan-sonyeondan-bts-kim-namjoon-namjoon-rm-tiny-tan.jpg'
    },
    {
        id: 2, 
        name: 'KSJ',
        imageUrl: 'https://i.pinimg.com/originals/0d/b9/1c/0db91c081e6fbb17a9d98c2f44390261.jpg'
    },
    {
        id: 3, 
        name: 'MYG',
        imageUrl: 'https://w0.peakpx.com/wallpaper/277/350/HD-wallpaper-tiny-tan-suga-agust-d-bangtan-sonyeondan-bts-min-yoongi-tiny-tan-yoongi.jpg'
    },
    {
        id: 4, 
        name: 'JHS',
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/5aa2069c25bf02363bf5c7c4/1650436352227-D4P7ZDPAM47PNO5REOV1/BTS_Forest4.png'
    },
    {
        id: 5, 
        name: 'PJM',
        imageUrl: 'https://w0.peakpx.com/wallpaper/731/583/HD-wallpaper-tiny-tan-jimin-bangtan-sonyeondan-bts-dynamite-park-jimin-tiny-tan.jpg'
    },
    {
        id: 6, 
        name: 'KTH',
        imageUrl: 'https://i.pinimg.com/564x/2d/99/96/2d99961deef93c58de613ac9b5aa9331.jpg'
    },
    {
        id: 7, 
        name: 'JJK',
        imageUrl: 'https://w0.peakpx.com/wallpaper/587/616/HD-wallpaper-tiny-tan-jungkook-bangtan-sonyeondan-bts-dynamite-jeon-jungkook-jk-kookie-tiny-tan.jpg'
    },
  ];
  return (
    <View >
      <Text style={styles.headingText}>ContactList</Text>
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
    width:200,
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
