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
  const [ symbols, setSymbols ] = useState(false)

  const generatePasswordString = (passwordLength: number) => {
    let charactersList = '';

    const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz'
    const digitCharacters = '0123456789'
    const specialCharacters = '!@#$%^&*()_+'

    if (upperCase) 
      charactersList += upperCaseCharacters
    if (lowerCase)
      charactersList += lowerCaseCharacters
    if (numbers)
      charactersList += digitCharacters
    if (symbols)
      charactersList += specialCharacters

    const generatedPassword = createPassword(charactersList, passwordLength)

    setPassword(generatedPassword)
    setIsPassGenerated(true)

  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = ''
    for(let i=0; i<passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }

    return result
  }

  const resetPasswordState = () => {
    setIsPassGenerated(false)
    setPassword('')
    setLowerCase(true)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)
  }

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})