/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable
} from 'react-native';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function App(): JSX.Element {
  const [diceNumber, setDiceNumber] = useState(DiceOne);

  const rollTheDie = () => {
    let diceNum = Math.floor(Math.random() * 6) + 1;
    ReactNativeHapticFeedback.trigger("impactLight", options);
    switch (diceNum) {
      case 1:
        setDiceNumber(DiceOne);
        break;

      case 2:
        setDiceNumber(DiceTwo);
        break;

      case 3:
        setDiceNumber(DiceThree);
        break;

      case 4:
        setDiceNumber(DiceFour);
        break;

      case 5:
        setDiceNumber(DiceFive);
        break;

      case 6:
        setDiceNumber(DiceSix);
        break;
    }
    // setDiceNum(dice)
  };

  return (
    <View style={[styles.container]}>
      {/* <Text>Text</Text> */}
      <Dice imageUrl={diceNumber} />

      {/* <Button title="Roll" onPress={() => rollTheDie()} /> */}

      <Pressable
      onPress={rollTheDie}
      >
        <Text
        style={styles.rollDiceBtnText}
        >
        Roll the dice
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
