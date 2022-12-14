import React, { useState } from 'react'
import { useFonts, Poppins_700Bold, Poppins_300Light } from '@expo-google-fonts/poppins'
import { Image } from 'react-native'
import { useForm } from 'react-hook-form'
import { Login as LoginUseCase } from '@domain/use-cases'
import { Button, ControlledInput, RecoveryPasswordButton } from '@presentation/components'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import * as S from './styles'
import { InputTypes } from '@presentation/components/Input'

type Props = {
  login: LoginUseCase
}

type LoginData = {
  username: string
  password: string
}

const schema = yup.object({
  username: yup.string().required("type your usename"),
  password: yup.string().min(6, "password should have 6 caracters at least").required("type your password")
})

const Login = ({ login }: Props) => {
  const [loaded, setLoaded] = useState(true)
  const { control, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: yupResolver(schema),
    mode: 'all'
  })

  const handleLoginData = async (data: { username: string, password: string }) => {
    setLoaded(false)
    const res = await login.execute({ user: data.username, password: data.password})
    setLoaded(true)

    console.log(res)
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

        <ControlledInput
          name='username'
          control={control}
          placeholder='Enter username'
          fieldError={errors.username}
        />
        <ControlledInput
          name='password'
          control={control}
          placeholder='Enter password'
          type={InputTypes.password}
          fieldError={errors.password}
          maxLength={20}
        /> 

        <RecoveryPasswordButton text='Recovery password' />

        <Button text='Login' enabled={loaded} onPress={handleSubmit(handleLoginData)} />

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