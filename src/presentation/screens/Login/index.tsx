import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter'

import * as S from './styles'

const Login = () => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular
  })
  if (!fontsLoaded) {
    return <View />
  } else {
    return (
      <S.Container>
        <Text>Tela de Login1</Text>
      </S.Container>
    )
  }
}

export default Login;