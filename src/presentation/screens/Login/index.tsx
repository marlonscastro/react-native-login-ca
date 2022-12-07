import React from 'react'
import { Text, View } from 'react-native'
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter'
import { Login } from '../../../domain/use-cases'

import * as S from './styles'

type Props = {
  login: Login
}

const Login = ({ login }: Props) => {

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