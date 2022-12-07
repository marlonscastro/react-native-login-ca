import React from 'react'
import { KeyboardAvoidingView, Text, View } from 'react-native'
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { Login as LoginUseCase } from '@domain/use-cases'

import * as S from './styles'
import { TextInput } from 'react-native-gesture-handler'

type Props = {
  login: LoginUseCase
}

const Login = ({ login }: Props) => {

  let [fontsLoaded] = useFonts({
    Roboto_500Medium
  })

  if (!fontsLoaded) {
    return <View />
  } else {
    return (
      <S.Container>
        <Text style={{ fontSize: 20, fontFamily: 'Roboto_500Medium', color: '#fff'}}>
          Tela de Login10
        </Text>
        <S.Input placeholder='User' />
        <S.Input placeholder='Password' />
      </S.Container>
    )
  }
}

export default Login;