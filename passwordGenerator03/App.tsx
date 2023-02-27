import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'

import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be min 4 characters')
  .max(16, 'Should be max 16 characters')
  .required('This is required')
})

const App = () => {

  const [ password, setPassword ] = useState('')
  const [ isPassGenerated, setIsPassGenerated ] = useState(false)
  const [ lowerCase, setLowerCase ] = useState(true)
  const [ upperCase, setUpperCase ] = useState(false)
  const [ numbers, setNumbers ] = useState(false)
  const [ symbols, useSymbols ] = useState(false)

  const generatePasswordString = (passwordLength: number) => {}

  const createPassword = (characters: string, passwordLength: number) => {}

  const resetPasswordState = () => {}

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})