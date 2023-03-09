/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [ bgColor, setBgColor ] = useState("#ffffff")

  const generateColor = () => {
    const hexRange = "0123456789abcdef"

    let color = "#"

     for (let i=0; i<6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]
     }

     setBgColor(color)
  }

  return (
    <>
      <StatusBar backgroundColor={'#000'}></StatusBar>
      <View style={[styles.container, {backgroundColor: bgColor} ]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionButton}>
            <Text>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionButton: {
    borderRadius: 12,
    backgroundColor: '#574b90',
    padding: 15,
    color: '#000'
  }
});

export default App;
