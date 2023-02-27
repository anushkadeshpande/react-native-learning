import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be min 4 characters')
  .max(16, 'Should be max 16 characters')
  .required('This is required')
})

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})