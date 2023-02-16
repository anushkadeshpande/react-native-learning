import { 
    View, 
    Text,
    StyleSheet,
    useColorScheme
 } from 'react-native'
import React from 'react'

const AppPro = () : JSX.Element=> {
    const isDarkMode = useColorScheme() === 'dark'
  return (
    <View style={styles.container} >
      <Text style={isDarkMode? styles.whiteText : styles.darkText}>AppPro</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    whiteText: {
        color: '#ffffff'  
    },
    darkText: {
        color: '#000000'
    }
})

export default AppPro