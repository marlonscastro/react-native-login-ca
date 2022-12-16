import React from 'react'
import { useFonts, Poppins_700Bold, Poppins_300Light } from '@expo-google-fonts/poppins'
import { Image, TextInput } from 'react-native'
import { useForm } from 'react-hook-form'
import { Login as LoginUseCase } from '@domain/use-cases'
import { Button, Input, RecoveryPasswordButton } from '@presentation/components'

import * as S from './styles'
import { InputTypes } from '@presentation/components/Input'

type Props = {
  login: LoginUseCase
}

const Login = ({ login }: Props) => {
  const { control, handleSubmit } = useForm()

  const handleData = (data: any) => {
    console.log(data)
  }

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

        <Input name='username' placeholder='Enter username' control={control}/>
        <Input name='password' placeholder='Password' type={InputTypes.password} control={control}/>

        <RecoveryPasswordButton text='Recovery password' />

        <Button text='Sign In' onPress={() => console.log('teste')}/>

        <S.TitleFooter>
          <S.TextFooter>
            Or continue with
          </S.TextFooter>
        </S.TitleFooter>

        <S.Footer>
          <S.LogoFooter>
            <Image source={require('../../../../assets/google-logo.png')} style={{ width: 20, height: 20 }} />
          </S.LogoFooter>
          <S.LogoFooter>
            <Image source={require('../../../../assets/apple-logo.png')} style={{ width: 30, height: 25, resizeMode: 'contain', tintColor: '#444' }} />
          </S.LogoFooter>
          <S.LogoFooter>
            <Image source={require('../../../../assets/facebook-logo.png')} style={{ width: 20, height: 20 }} />
          </S.LogoFooter>
        </S.Footer>
      </S.Container>
    )
  }
}

export default Login;