import React from 'react'
import { useFonts, Poppins_700Bold, Poppins_300Light } from '@expo-google-fonts/poppins'
import { Login as LoginUseCase } from '@domain/use-cases'
import { Button, Input } from '@presentation/components'

import * as S from './styles'
import { InputTypes } from '@presentation/components/Input'

type Props = {
  login: LoginUseCase
}

const Login = ({ login }: Props) => {

  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_300Light
  })

  if (!fontsLoaded) {
    return null
  } else {
    return (
      <S.Container>
        <S.Header>
          <S.Title style={{ fontFamily: 'Poppins_700Bold' }}>Hello Again!</S.Title>

          <S.Subtitle style={{ fontFamily: 'Poppins_300Light' }}>Wellcome back you've been missed</S.Subtitle>
        </S.Header>

        <Input placeholder='Enter username'/>
        <Input placeholder='Password' type={InputTypes.password}/>

        <S.RecoveryButton>
          <S.RecoveryText>
            Recovery Password
          </S.RecoveryText>
        </S.RecoveryButton>

        <Button text='Sign In' />

        <S.TitleFooter>
          <S.TextFooter>
            Or continue with
          </S.TextFooter>
        </S.TitleFooter>

        <S.Footer>
          <S.LogoFooter>
          </S.LogoFooter>
          <S.LogoFooter />
          <S.LogoFooter />
        </S.Footer>
      </S.Container>
    )
  }
}

export default Login;