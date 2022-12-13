import React from 'react'
import { View, Text } from 'react-native'
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { Login as LoginUseCase } from '@domain/use-cases'
import { Button, Input } from '@presentation/components'

import * as S from './styles'

type Props = {
  login: LoginUseCase
}

const Login = ({ login }: Props) => {

  let [fontsLoaded] = useFonts({
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <View />
  } else {
    return (
      <S.Container>
        <S.Title>Hello Again!</S.Title>

        <S.Subtitle>Wellcome back you've been missed</S.Subtitle>

        <Input placeholder='Enter username' />
        <Input placeholder='Password' />

        <S.RecoveryText>
          <Text>
            Recovery Password
          </Text>
        </S.RecoveryText>

        <Button text='Sign In'/>

      </S.Container>
    )
  }
}

export default Login;